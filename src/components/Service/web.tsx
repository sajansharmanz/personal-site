import illustration from "../../assets/illustrations/website.svg";

import SectionHeading from "../SectionHeading";

export default function Web() {
  return (
    <>
      <SectionHeading title="Website Development" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">
          Website Development
        </h1>
        <img src={illustration} alt="" className="mx-auto h-auto w-1/3" />
        <p className="my-8 leading-7 text-slate-500">
          In today's digital age, having a compelling online presence is crucial
          for any business. My website development services are designed to
          deliver visually stunning, highly functional, and user-friendly
          websites that resonate with your brand identity and engage your
          audience. Leveraging the power of modern web technologies, I ensure
          your website is fast, responsive, and optimized for both search
          engines and user experience. Whether you're looking to build a simple
          landing page or a complex web application, I am dedicated to bringing
          your vision to life with meticulous attention to detail and a
          commitment to quality.
        </p>
      </div>
    </>
  );
}
