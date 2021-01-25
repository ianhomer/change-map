import { useRouter } from "next/router";

import Map from "../../components/map";
import graphs from "../../graphs";
import { Graph } from "../../types/graph";

export default function Page() {
  const router = useRouter();
  const gid: string = router.query["gid"];

  return <Map graph={graphs[gid] as Graph} />;
}
