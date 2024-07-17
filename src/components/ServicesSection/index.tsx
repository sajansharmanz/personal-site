import {
  BeakerIcon,
  BugAntIcon,
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

import ServiceItem from "./item";
import SectionHeading from "../SectionHeading";

interface Props {
  showSectionHeading?: boolean;
}

export default function ServicesSection({ showSectionHeading = false }: Props) {
  return (
    <div className="rounded-xl bg-slate-100 p-4">
      {showSectionHeading ? <SectionHeading title="Services" /> : null}

      <div
        className={`${showSectionHeading && "mt-4"} flex w-full flex-col items-start justify-start space-y-4`}
      >
        <ServiceItem
          title="Website Development"
          Icon={WindowIcon}
          to="/service/website-development"
        />
        <ServiceItem
          title="App Development"
          Icon={DevicePhoneMobileIcon}
          to="/service/app-development"
        />
        <ServiceItem
          title="API Development"
          Icon={CubeTransparentIcon}
          to="/service/api-development"
        />
        <ServiceItem
          title="Bug Fixing"
          Icon={BugAntIcon}
          to="/service/bug-fixing"
        />
        <ServiceItem title="Testing" Icon={BeakerIcon} to="/service/testing" />
        <ServiceItem
          title="Consultancy"
          Icon={UserGroupIcon}
          to="/service/consultancy"
        />
      </div>
    </div>
  );
}
