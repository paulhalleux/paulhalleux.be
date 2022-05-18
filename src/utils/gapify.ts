export type Gap = { col?: number; row?: number; };
export function gapify(gap: number | { col?: number; row?: number; }): gap is Gap {
    return !(typeof gap === "number");
}