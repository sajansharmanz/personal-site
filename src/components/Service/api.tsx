import illustration from "../../assets/illustrations/api.svg";

import SectionHeading from "../SectionHeading";

export default function API() {
  return (
    <>
      <SectionHeading title="API Development" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">
          API Development
        </h1>
        <img
          src={illustration}
          alt="API illustration"
          className="mx-auto h-auto w-1/3"
        />
        <p className="my-8 leading-7 text-slate-500">
          APIs are the backbone of modern applications, enabling seamless
          communication between different systems and services. My API
          development services focus on creating robust, scalable, and secure
          APIs that facilitate efficient data exchange and integration for your
          applications. Whether you need RESTful or GraphQL APIs, I utilize best
          practices to ensure your APIs are well-structured, easy to use, and
          maintainable. By prioritizing performance and security, I empower your
          applications to operate smoothly and reliably, paving the way for
          innovative solutions and enhanced user experiences. Let me help you
          unlock the full potential of your projects with powerful API
          integrations.
        </p>
      </div>
    </>
  );
}
