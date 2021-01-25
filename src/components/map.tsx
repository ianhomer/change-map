import { useRef } from "react";
import { Graph } from "../types/graph";

interface MapProps {
  graph: Graph;
}

export default function Map(props: MapProps) {
  const ref = useRef(null);

  return (
    <>
      <div>Map {JSON.stringify(props.graph)}</div>
      <svg ref={ref} />
    </>
  );
}
