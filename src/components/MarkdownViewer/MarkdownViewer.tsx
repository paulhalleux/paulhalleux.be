import styles from "./MarkdownViewer.module.scss";
import { useState } from "react";
import { Resizable } from "re-resizable";
import ReactMarkdown from "react-markdown";
import { Title } from "./Renderers/Title";
import { List } from "./Renderers/List";

type MarkdownViewerProps = {
  code: string;
};

export function MarkdownViewer({ code }: MarkdownViewerProps) {
  const [width, setWidth] = useState<number>(600);

  return (
    <div className={styles["markdown-viewer"]}>
      <Resizable
        enable={{ right: true }}
        minWidth={400}
        maxWidth={850}
        onResizeStop={(e, direction, ref, d) => setWidth(width + d.width)}
        size={{ width, height: "100%" }}
      >
        <div className={styles.viewer__code}>
          <table>
            <tbody>
              {code.split("\n").map((line, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{line}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Resizable>
      <div className={styles.viewer__result}>
        <ReactMarkdown
          components={{
            h1: Title,
            ul: List,
          }}
        >
          {code}
        </ReactMarkdown>
      </div>
    </div>
  );
}
