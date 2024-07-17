import illustration from "../../assets/illustrations/testing.svg";

import SectionHeading from "../SectionHeading";

export default function Testing() {
  return (
    <>
      <SectionHeading title="Testing" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Testing</h1>
        <img
          src={illustration}
          alt="Testing illustration"
          className="mx-auto h-auto w-1/3"
        />
        <p className="my-8 leading-7 text-slate-500">
          Ensuring the reliability and quality of your software is paramount,
          which is why my comprehensive testing services are designed to
          meticulously evaluate every aspect of your applications. From unit and
          integration testing to end-to-end and performance testing, I employ a
          range of methodologies and tools to identify and address potential
          issues before they impact your users. My rigorous testing processes
          guarantee that your software is robust, secure, and ready for
          deployment, providing you with the confidence that your application
          will perform flawlessly in any environment. Partner with me to ensure
          your projects meet the highest standards of quality and reliability.
        </p>
      </div>
    </>
  );
}
