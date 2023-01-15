import styles from "./Screw.module.scss";
import clsx from "clsx";

type ScrewProps = {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export function Screw({ position }: ScrewProps) {
  return (
    <div className={clsx(styles.screw, styles[`screw--${position}`])}>
      <i className="ri-close-line" />
    </div>
  );
}
