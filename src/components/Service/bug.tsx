import illustration from "../../assets/illustrations/bug.svg";

import SectionHeading from "../SectionHeading";

export default function Bug() {
  return (
    <>
      <SectionHeading title="Bug Fixing" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Bug Fixing</h1>
        <img
          src={illustration}
          alt="Bug illustration"
          className="mx-auto h-auto w-1/3"
        />
        <p className="my-8 leading-7 text-slate-500">
          Software bugs can disrupt user experiences and impact business
          operations, but my bug investigation and remediation services are here
          to help. With a keen eye for detail and extensive experience in
          troubleshooting, I quickly identify and diagnose issues within your
          applications. Utilizing advanced debugging techniques and tools, I not
          only resolve existing problems but also implement preventive measures
          to ensure long-term stability. My commitment to delivering
          high-quality software means I work diligently to restore functionality
          and enhance the overall performance of your projects, so you can focus
          on what matters most—growing your business.
        </p>
      </div>
    </>
  );
}
