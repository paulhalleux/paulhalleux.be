import styles from "./List.module.scss";
import { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren) {
  return <ul className={styles.list}>{children}</ul>;
}
