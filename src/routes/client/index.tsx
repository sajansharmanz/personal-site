import { useLoaderData } from "react-router-dom";

export default function Client() {
  const element = useLoaderData() as JSX.Element;

  return <h1>{element}</h1>;
}
