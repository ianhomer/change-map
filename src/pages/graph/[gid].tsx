import Map from "../../components/map";
import { useRouter } from "next/router";
import { Graph } from "../../types/graph";
import graphs from "../../graphs";

export default function Page() {
  const router = useRouter();
  const gid: string = router.query["gid"];

  return <Map graph={graphs[gid] as Graph} />;
}
