import { useRouter } from "next/router";

import ChangeMap from "../../components/ChangeMap";
import graphs from "../../graphs";
import { Graph } from "../../types/graph";

export default function Page() {
  const { gid } = useRouter().query;
  const name: string = (gid as string) ?? "single";

  return (
    <>
      <ChangeMap graph={graphs[name] as Graph} />
    </>
  );
}
