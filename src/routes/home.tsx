import Memoji from "../assets/sajan-namaste.png";

import HireMe from "../components/HireMe";
import SectionHeading from "../components/SectionHeading";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <SectionHeading title="Developer" />
        <div className="flex items-center justify-start rounded-xl bg-green-100 px-2 py-1">
          <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />
          <span className="text-sm font-medium capitalize tracking-wide text-green-900">
            Available for work
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-center justify-center sm:flex-row">
        <div className="w-full p-2 text-center sm:w-1/2 sm:text-left">
          <h1 className="text-4xl font-bold">Sajan Sharma</h1>
          <p className="my-2 text-lg text-slate-400">
            Fullstack TypeScript Developer.
          </p>
          <div className="flex items-center justify-center space-x-2 sm:justify-start">
            <HireMe />
          </div>
        </div>
        <div className="w-2/3 p-2 sm:w-1/2">
          <div className="rounded-full bg-slate-100 p-4">
            <div className="rounded-full bg-slate-300 p-2">
              <img
                src={Memoji}
                alt="Memoji of Sajan doing a namaste"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ServicesSection showSectionHeading />
      </div>
    </>
  );
}
