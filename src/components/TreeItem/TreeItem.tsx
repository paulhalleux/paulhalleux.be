import styles from "./TreeItem.module.scss";
import { ReactNode, useState } from "react";
import clsx from "clsx";

type TreeItemProps = {
  icon: ReactNode;
  name: string;
  onClick?: () => void;
  href?: string;
  children?: TreeItemProps[];
  defaultOpened?: boolean;
  selected?: boolean;
};

export function TreeItem({
  icon,
  name,
  href,
  children,
  selected,
  onClick,
  defaultOpened = false,
}: TreeItemProps) {
  const [opened, setOpened] = useState<boolean>(defaultOpened);

  const onOpen = () => {
    if (!children || !children.length) onClick?.();
    else setOpened((o) => !o);
  };

  const Component = href ? "a" : "div";

  return (
    <Component href={href} className={styles["tree-item"]}>
      <header
        onClick={onOpen}
        className={clsx(
          !(children && children.length) && !href && styles.file,
          opened && styles.opened,
          selected && styles.selected
        )}
      >
        {children && children.length && (
          <i
            className={
              opened ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"
            }
          />
        )}
        <span>{icon}</span>
        <p className={styles.name}>{name}</p>
      </header>
      {children && children.length && opened && (
        <section>
          {children.map((child) => (
            <TreeItem
              icon={child.icon}
              name={child.name}
              onClick={child.onClick}
              selected={child.selected}
            />
          ))}
        </section>
      )}
    </Component>
  );
}
