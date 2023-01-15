import { PropsWithChildren } from "react";
import styles from "./Title.module.scss";

export function Title({ children }: PropsWithChildren) {
  return <h1 className={styles.title}>{children}</h1>;
}
