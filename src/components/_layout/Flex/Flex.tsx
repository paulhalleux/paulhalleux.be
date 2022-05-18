import clsx from "clsx";

import styles from "./Flex.module.scss"
import {ReactNode} from "react";
import {Gap, gapify} from "../../../utils/gapify";

type FlexProps = {
    children: ReactNode;
    className?: string;
    align?: "start" | "end" | "center" | "stretch";
    justify?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    grow?: number;
    shrink?: number;
    basis?: number | string;
    order?: number;
    gap?: number | Gap;
}

export default function Flex({children, className, ...attributes}: FlexProps) {
    const style = {
        alignItems: attributes.align,
        justifyContent: attributes.justify,
        flexWrap: attributes.wrap,
        flexDirection: attributes.direction,
        flexGrow: attributes.grow,
        flexShrink: attributes.shrink,
        flexBasis: attributes.basis,
        order: attributes.order,
        gridGap: attributes.gap ? (gapify(attributes.gap) ? `${attributes.gap.col ?? 0}px ${attributes.gap.row ?? 0}px` : attributes.gap) : undefined,
    }

    return <div className={clsx(styles.flex, className)} style={style}>
        {children}
    </div>
}