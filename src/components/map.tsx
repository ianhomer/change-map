import * as d3 from "d3";
import { useEffect, useRef } from "react";

import { flow, transform } from "../engine";
import { Graph, Node } from "../types/graph";

interface MapProps {
  graph: Graph;
  width?: number;
  height?: number;
}

Map.defaultProps = {
  width: 1600,
  height: 800,
};

export default function Map(props: MapProps) {
  const ref = useRef(null);
  const width = props.width ?? 600;
  const height = props.height ?? 400;
  const xOffset = width / 2;
  const yOffset = height / 2;
  const DEFAULT_NODE_SIZE = 10;
  const DEFAULT_NODE_TYPE = "change";
  const transformNode = transform(xOffset, yOffset);

  // Initial Load
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.attr("viewBox", `0 0 ${width} ${height}`);
  }, []);

  // props update
  useEffect(() => {
    const svg = d3.select(ref.current);
    const node = svg
      .selectAll<SVGElement, Node>(".node")
      .data(props.graph.nodes)
      .join("g")
      .classed("node", true)
      .raise();

    node
      .append("circle")
      .attr("r", (d: Node) => d?.size ?? DEFAULT_NODE_SIZE)
      .attr("data-type", (d: Node) => d?.type ?? DEFAULT_NODE_TYPE)
      .classed("fixed", (d: Node) => d.fx !== undefined);

    node
      .append("text")
      .text((d: Node) => d?.label ?? null)
      .attr("x", (d: Node) => 10 + (d?.size ?? DEFAULT_NODE_SIZE))
      .attr("y", DEFAULT_NODE_SIZE)
      .classed("label", true);

    function tick() {
      node.attr("transform", transformNode);
    }

    flow(props.graph, tick);
  }, [props]);

  return (
    <>
      <div>Map {JSON.stringify(props.graph)}</div>
      <svg ref={ref} />
    </>
  );
}
