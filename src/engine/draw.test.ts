import { Node } from "../types/graph";
import { transform } from ".";

it("transform OK", () => {
  expect(transform(0, 0)({} as Node)).toBe("translate(0,0)");
  expect(transform(5, 10)({} as Node)).toBe("translate(5,10)");
  expect(transform(5, 10)({ x: 10, y: 3 } as Node)).toBe("translate(15,13)");
});
