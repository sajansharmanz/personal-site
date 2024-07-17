import HireMe from "../HireMe";
import LogoRoller from "../LogoRoller";

export default function Footer() {
  return (
    <>
      <div className="mt-8">
        <LogoRoller />
      </div>

      <div className="mt-8 flex flex-col items-center justify-center rounded-xl bg-slate-100 p-4 text-center">
        <h1 className="text-center text-4xl font-bold">Let's work together.</h1>
        <p className="mb-4 mt-2 text-slate-400">
          Crafting captivating digital experiences
        </p>
        <HireMe />
      </div>
    </>
  );
}
