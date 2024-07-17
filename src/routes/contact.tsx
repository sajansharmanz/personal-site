import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  return (
    <div>
      <SectionHeading title="Contact Me" />

      <div className="my-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Contact Me</h1>
        <p className="leading-7 text-slate-500">
          I'd love to hear from you! If you have a project in mind or any
          questions, please reach out by emailing{" "}
          <a
            className="font-bold underline"
            href="mailto:sajansharmanz@gmail.com"
          >
            sajansharmanz@gmail.com
          </a>
          . Be sure to include details about your project, and I will get back
          to you as soon as possible. Looking forward to connecting!
        </p>
      </div>
    </div>
  );
}
