import {ReactNode} from "react";

import styles from "./Text.module.scss";
import clsx from "clsx";

type TextProps = {
    children: ReactNode;
    secondary?: boolean;
}

export default function Text({children, secondary}: TextProps) {
    return <p className={clsx(styles.text, secondary && styles["text--secondary"])}>{children}</p>
}