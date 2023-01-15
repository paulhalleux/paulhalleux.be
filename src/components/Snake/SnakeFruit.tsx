import styles from "./SnakeFruit.module.scss";
import clsx from "clsx";

export function SnakeFruit({ active = true }: { active?: boolean }) {
  return (
    <div className={clsx(styles["snake-fruit"], active && styles.active)}>
      <span />
    </div>
  );
}
