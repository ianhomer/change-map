export const transform = (xOffset: number, yOffset: number) => (d: Node) =>
  "translate(" + (xOffset + (d?.x ?? 0)) + "," + (yOffset + (d?.y ?? 0)) + ")";
