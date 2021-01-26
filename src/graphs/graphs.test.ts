import graphs from ".";

it("single OK", () => {
  expect(graphs.single.nodes.length).toBe(1);
});
