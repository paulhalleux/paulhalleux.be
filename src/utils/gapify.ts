export type GridGap = { col?: number; row?: number; };
export function gap(gap: number | { col?: number; row?: number; }): gap is GridGap {
    return !(typeof gap === "number");
}