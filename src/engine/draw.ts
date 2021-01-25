import { Node } from "../types/graph";

export const transform = (xOffset: number, yOffset: number) => (
  d: Node
): string =>
  "translate(" + (xOffset + (d?.x ?? 0)) + "," + (yOffset + (d?.y ?? 0)) + ")";
