import styles from "./Code.module.scss";

type CodeProps = {
  code: {
    type: "keyword" | "text" | "string" | "variable";
    content: string;
  }[];
};

export function Code({ code }: CodeProps) {
  return (
    <code className={styles.code}>
      {code.map((c) => (
        <span className={styles[`code-${c.type}`]}>{c.content}</span>
      ))}
    </code>
  );
}
