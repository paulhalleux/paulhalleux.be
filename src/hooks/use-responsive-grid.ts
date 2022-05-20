/* eslint-disable react-hooks/exhaustive-deps */
import {RefObject, useEffect, useState} from "react";
import {useEventListener} from "./use-event-listener";

type ResponsiveGridOptions = {
    uniqueColumnItemCount?: number
}

export function useResponsiveGrid<T>(reference: RefObject<HTMLElement>, items: T[], options?: ResponsiveGridOptions): T[] {
    const [responsiveItems, setResponsiveItems] = useState<T[]>(items);

    const onColumnsChange = () => {
        const amount = reference.current && window.getComputedStyle(reference.current).gridTemplateColumns.split(" ").length;
        if (amount === null) {
            return;
        } else setResponsiveItems(items.splice(0,
            (amount === 1 && options && options.uniqueColumnItemCount)
                ? options.uniqueColumnItemCount
                : amount === -1
                    ? 0
                    : items.length - (items.length % amount)))
    }

    useEventListener("resize", () => {
        onColumnsChange()
    });

    useEffect(() => {
        onColumnsChange()
    }, [reference.current]);

    return responsiveItems;
}