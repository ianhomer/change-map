import { useRouter } from "next/router";

import Map from "../../components/map";
import graphs from "../../graphs";
import { Graph } from "../../types/graph";

export default function Page() {
  const { gid } = useRouter().query;
  const name: string = (gid as string) ?? "single";

  return (
    <>
      <Map graph={graphs[name] as Graph} />
    </>
  );
}
