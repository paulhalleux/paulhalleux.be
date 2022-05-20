import styles from "./Grid.module.scss";
import clsx from "clsx";
import {ReactNode, Ref} from "react";
import {Gap, gapify} from "../../../utils/gapify";

type GridProps = {
    children: ReactNode;
    className?: string;
    rows?: number | string;
    cols?: number | string;
    responsive?: { min?: number | "auto", max?: number | "auto" };
    gap?: number | Gap;
    elementRef?: Ref<HTMLDivElement>;
}

export default function Grid({children, className, responsive, gap, rows, cols, elementRef}: GridProps) {
    const style = {
        gridTemplateRows: rows ? value(rows) : undefined,
        gridTemplateColumns: cols ? value(cols) : (responsive ? `repeat(auto-fit, minmax(${responsiveValue(responsive.min)}, ${responsiveValue(responsive.max)}))` : undefined),
        gridGap: gap ? (gapify(gap) ? `${gap.col ?? 0}px ${gap.row ?? 0}px` : gap) : undefined,
    }

    return <div ref={elementRef} className={clsx(styles.grid, className)} style={style}>
        {children}
    </div>
}

function value(value: number | string) {
    return typeof value === "number" ? `repeat(${value}, 1fr)` : value;
}

function responsiveValue(value?: number | "auto") {
    return typeof value === "number" ? `${value}px` : value;
}