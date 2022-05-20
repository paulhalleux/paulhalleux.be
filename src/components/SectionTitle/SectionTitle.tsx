import clsx from "clsx";
import styles from "./SectionTitle.module.scss"
import {ReactNode} from "react";

type SectionTitleProps = {
    anchor: string;
    sectionName: string;
    title: string;
    renderAddon?: () => JSX.Element | ReactNode
}

export default function SectionTitle({sectionName, anchor, title, renderAddon}: SectionTitleProps) {
    return <div className={clsx(styles.title)} id={anchor}>
        <h3>#{sectionName}</h3>
        <h2>{title}</h2>
        {typeof renderAddon === "function" ? renderAddon?.(): renderAddon}
    </div>
}
