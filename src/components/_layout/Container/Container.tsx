import styles from "./Container.module.scss";
import {ReactNode} from "react";
import clsx from "clsx";

type ContainerProps = {
    children: ReactNode;
    className?: string;
}

export default function Container({children, className}: ContainerProps) {
    return <div className={clsx(styles.container, className)}>
        {children}
    </div>
}