import styles from "./PageSidebar.module.scss";
import { PropsWithChildren, useState } from "react";
import { Resizable } from "re-resizable";

export function PageSidebar({ children }: PropsWithChildren) {
  const [width, setWidth] = useState(271);

  return (
    <Resizable
      enable={{ right: true }}
      maxWidth={400}
      minWidth={200}
      size={{ width, height: "100%" }}
      onResizeStop={(e, direction, ref, d) => setWidth(width + d.width)}
    >
      <div className={styles["page-sidebar"]}>{children}</div>
    </Resizable>
  );
}
