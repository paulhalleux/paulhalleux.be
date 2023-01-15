import styles from "./EmptyState.module.scss";

type EmptyStateProps = {
  title: string;
};

export function EmptyState({ title }: EmptyStateProps) {
  return <h3 className={styles["empty-state"]}>{title}</h3>;
}
