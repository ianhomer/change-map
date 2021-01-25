import { useRouter } from "next/router";

import Map from "../../components/map";
import graphs from "../../graphs";
import { Graph } from "../../types/graph";

export default function Page() {
  const router = useRouter();
  const { gid } = router.query;

  return <Map graph={graphs[gid ? gid[0] : "single"] as Graph} />;
}
