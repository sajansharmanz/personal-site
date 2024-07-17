import { useLoaderData } from "react-router-dom";

export default function Service() {
  const node = useLoaderData() as JSX.Element;

  return <h1>{node}</h1>;
}
