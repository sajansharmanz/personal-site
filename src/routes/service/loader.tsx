import { LoaderFunctionArgs } from "react-router-dom";

import Web from "../../components/Service/web";
import App from "../../components/Service/app";
import API from "../../components/Service/api";
import Bug from "../../components/Service/bug";
import Consultancy from "../../components/Service/consultancy";
import Testing from "../../components/Service/testing";

const components: { [key: string]: React.ReactNode } = {
  "website-development": <Web />,
  "app-development": <App />,
  "api-development": <API />,
  "bug-fixing": <Bug />,
  testing: <Testing />,
  consultancy: <Consultancy />,
};

export default async function loader({ params }: LoaderFunctionArgs) {
  if (!params.service) {
    throw new Error("Service must be provided");
  }

  const componentToRender = components[params.service];

  if (!componentToRender) {
    throw new Error("Service not setup correctly");
  }

  return componentToRender;
}
