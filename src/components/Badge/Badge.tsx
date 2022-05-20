import styles from "./Badge.module.scss"
import {ReactNode} from "react";
import clsx from "clsx";

type BadgeProps = {
    children: ReactNode;
    className?: string;
}

export default function Badge({children, className}: BadgeProps) {
    return <span className={clsx(styles.badge, className)}>
        {children}
    </span>
}