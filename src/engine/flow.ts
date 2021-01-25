import * as d3 from "d3";

import { Graph } from "../types/graph";

export const flow = (graph: Graph, tick: () => void) =>
  d3
    .forceSimulation()
    .nodes(graph.nodes)
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(0, 0).strength(0.01))
    .alpha(0.1)
    .alphaDecay(0)
    .on("tick", tick);
