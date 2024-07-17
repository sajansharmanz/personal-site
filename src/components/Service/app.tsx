import illustration from "../../assets/illustrations/app.svg";

import SectionHeading from "../SectionHeading";

export default function App() {
  return (
    <>
      <SectionHeading title="App Development" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">
          App Development
        </h1>
        <img
          src={illustration}
          alt="App Illustration"
          className="mx-auto h-auto w-1/3"
        />
        <p className="my-8 leading-7 text-slate-500">
          In the mobile-first world, having a robust and intuitive app is
          essential to staying connected with your audience. I use cutting-edge
          technologies to create high-performance, cross-platform apps that
          provide seamless user experiences. Whether you need a powerful
          business tool, a customer-facing application, or an innovative startup
          idea brought to life, I work closely with you to deliver an app that
          meets your specific needs and exceeds your expectations.
        </p>
      </div>
    </>
  );
}
