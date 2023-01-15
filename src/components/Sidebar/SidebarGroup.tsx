import styles from "./SidebarGroup.module.scss";
import { PropsWithChildren, useState } from "react";
import clsx from "clsx";

type SidebarGroupProps = PropsWithChildren<{
  title: string;
}>;

export function SidebarGroup({ title, children }: SidebarGroupProps) {
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <div className={styles["sidebar-group"]}>
      <header
        onClick={() => setOpened((o) => !o)}
        className={clsx(styles.group__title, opened && styles.opened)}
      >
        <i className="ri-arrow-drop-down-fill" />
        <span>{title}</span>
      </header>
      {opened && <section>{children}</section>}
    </div>
  );
}
