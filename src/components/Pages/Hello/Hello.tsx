import styles from "./Hello.module.scss";
import { Code } from "../../Code/Code";
import { Game } from "../../Snake/Game";

export function Hello() {
  return (
    <div className={styles.hello}>
      <section className={styles.hello__hero}>
        <p>Hi all. I am</p>
        <h1>Paul Halleux</h1>
        <h2>{"> Frontend developer"}</h2>
        <div className={styles.hello__code}>
          <p>// complete the game to continue</p>
          <p>// and don't forget to visit my github</p>
          <Code
            code={[
              { type: "keyword", content: "const" },
              { type: "variable", content: "githubLink" },
              { type: "text", content: "=" },
              { type: "string", content: "“https://github.com/example/url”" },
            ]}
          />
        </div>
      </section>
      <Game />
    </div>
  );
}
