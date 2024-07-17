import { Link, useRouteError } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

import Memoji from "../assets/sajan-thinking.png";
import Navbar from "../components/Navbar";

export default function Error() {
  const error = useRouteError();

  const title =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    error.status === 404 ? "Page not found" : "Something went wrong";

  return (
    <div className="relative h-fit min-h-screen w-screen bg-slate-100 px-2 pb-6 text-slate-900 antialiased selection:bg-slate-900 selection:text-slate-50 sm:px-0">
      <Navbar />

      <main className="pt-24 sm:mx-auto sm:max-w-[560px]">
        <div className="rounded-lg bg-white p-4">
          <SectionHeading title="Something went wrong" />

          <div className="mx-auto flex w-1/2 flex-col items-center justify-center">
            <img
              src={Memoji}
              alt="Memoji of Sajan doing a namaste"
              className="rounded-full"
            />
            <h1 className="mb-2 text-xl font-bold">Oops! {title}</h1>
            <Link className="rounded-xl border-2 px-2 py-1" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
