import { LoaderFunctionArgs } from "react-router-dom";

import Nimble from "../../components/Client/Nimble";
import OpenSource from "../../components/Client/OpenSource";
import SkyVegas from "../../components/Client/SkyVegas";
import SCCFrance from "../../components/Client/SCCFrance";
import Jemini from "../../components/Client/Jemini";
import Fusion5 from "../../components/Client/Fusion5";
import MyWorkplace from "../../components/Client/MyWorkplace";
import UltimateBodyTransformation from "../../components/Client/UBT";
import BaySupplements from "../../components/Client/BaySupplements";

const components: { [key: string]: React.ReactNode } = {
  "open-source": <OpenSource />,
  "nimble-approach": <Nimble />,
  "sky-vegas": <SkyVegas />,
  "scc-france": <SCCFrance />,
  fusion5: <Fusion5 />,
  jemini: <Jemini />,
  "my-workplace": <MyWorkplace />,
  "ultimate-body-transformation": <UltimateBodyTransformation />,
  "bay-supplements": <BaySupplements />,
};

export default async function loader({ params }: LoaderFunctionArgs) {
  if (!params.client) {
    throw new Error("Client must be provided");
  }

  const componentToRender = components[params.client];

  if (!componentToRender) {
    throw new Error("Client not setup correctly");
  }

  return componentToRender;
}
