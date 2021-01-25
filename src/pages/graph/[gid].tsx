import { useRouter } from "next/router";

import Map from "../../components/map";
import graphs from "../../graphs";
import { Graph } from "../../types/graph";

export default function Page() {
  const { gid } = useRouter().query;

  return (
    <>
      <Map graph={graphs[gid ?? "single"] as Graph} />
    </>
  );
}
