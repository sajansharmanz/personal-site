import ASB from "../../assets/company-logos/asb.png";
import BaySupplements from "../../assets/company-logos/bay-supplements.webp";
import Fusion5 from "../../assets/company-logos/fusion5.svg";
import Jemini from "../../assets/company-logos/jemini.png";
import JoshiAutomotive from "../../assets/company-logos/joshi-automotive.png";
import NimbleApproach from "../../assets/company-logos/nimble.webp";
import PremierFitness from "../../assets/company-logos/premier-fitness.svg";
import SCC from "../../assets/company-logos/scc.svg";
import SDM from "../../assets/company-logos/sdm.png";
import SkyVegas from "../../assets/company-logos/sky-vegas.png";
import UBT from "../../assets/company-logos/ubt.webp";
import MWP from "../../assets/company-logos/myworksplace.png";

const logos: Array<{ id: number; logo: string; alt: string }> = [
  {
    id: 1,
    logo: NimbleApproach,
    alt: "Nimble Approach",
  },
  {
    id: 2,
    logo: SkyVegas,
    alt: "Sky Vegas",
  },
  {
    id: 3,
    logo: SCC,
    alt: "SCC",
  },
  {
    id: 4,
    logo: Fusion5,
    alt: "Fusion5",
  },
  {
    id: 5,
    logo: Jemini,
    alt: "Jemini",
  },
  {
    id: 6,
    logo: MWP,
    alt: "MyWorkplace",
  },
  {
    id: 7,
    logo: ASB,
    alt: "ASB Bank",
  },
  {
    id: 8,
    logo: BaySupplements,
    alt: "Bay Supplments Tauranga",
  },
  {
    id: 9,
    logo: UBT,
    alt: "Ultimate Body Transformation",
  },
  {
    id: 10,
    logo: PremierFitness,
    alt: "Premier Fitness",
  },
  {
    id: 11,
    logo: SDM,
    alt: "Sanatan Dharam Mandir",
  },
  {
    id: 12,
    logo: JoshiAutomotive,
    alt: "Joshi Automotive",
  },
];

const logoElements: Array<JSX.Element> = logos.map(({ id, logo, alt }) => (
  <li key={id}>
    <img
      src={logo}
      alt={alt}
      className={`h-12 w-auto max-w-none grayscale ${id === 8 || id === 6 ? "rounded-lg bg-neutral-800 p-2" : ""} ${id === 10 ? "h-8" : ""} ${id === 7 ? "h-10" : ""}`}
    />
  </li>
));

export default function LogoRoller() {
  return (
    <div className="group inline-flex w-full flex-nowrap space-x-16 overflow-hidden">
      <ul className="group-hover:paused flex animate-infinite-scroll items-center justify-center space-x-16 md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {logoElements.map((component) => component)}
      </ul>
      <ul
        className="group-hover:paused flex animate-infinite-scroll items-center justify-center space-x-16 md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {logoElements.map((component) => component)}
      </ul>
    </div>
  );
}
