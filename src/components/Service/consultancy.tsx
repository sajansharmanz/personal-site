import illustration from "../../assets/illustrations/consultancy.svg";

import SectionHeading from "../SectionHeading";

export default function Consultancy() {
  return (
    <>
      <SectionHeading title="Consultancy" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Consultancy</h1>
        <img
          src={illustration}
          alt="Consultancy illustration"
          className="mx-auto h-auto w-1/3"
        />
        <p className="my-8 leading-7 text-slate-500">
          Navigating the complexities of software development can be
          challenging, which is why my consultancy services are designed to
          provide expert guidance tailored to your unique needs. With a deep
          understanding of the latest technologies and industry best practices,
          I help you make informed decisions that drive your projects forward.
          Whether you need strategic advice on architecture, technology stack
          selection, or project planning, I am dedicated to aligning your goals
          with effective solutions. Partner with me to leverage my expertise and
          unlock new opportunities for innovation and growth in your business.
        </p>
      </div>
    </>
  );
}
