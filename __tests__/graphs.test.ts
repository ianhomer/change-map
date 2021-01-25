import graphs from "../src/graphs";

it("single OK", () => {
  expect(graphs.single.nodes.length).toBe(1);
});
