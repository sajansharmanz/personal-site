import SectionHeading from "../SectionHeading";

export default function OpenSource() {
  return (
    <>
      <SectionHeading title="Open Source" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Open Source</h1>

        <p className="my-8 leading-7 text-slate-500">
          As an active member of the AdonisJS community, I recognized a
          significant gap: the absence of a formatter for EdgeJS templates,
          which had been a persistent pain point for developers. Despite the
          framework authors' desire to address this issue, they had been unable
          to dedicate the necessary time and resources due to its complexity.
          Stepping up to the challenge, I successfully developed two open-source
          projects: an{" "}
          <a
            className="font-medium underline"
            href="https://www.npmjs.com/package/edgejs-parser"
          >
            EdgeJS parser
          </a>{" "}
          for templates and a{" "}
          <a
            className="font-medium underline"
            href="https://www.npmjs.com/package/prettier-edgejs"
          >
            Pretier plugin
          </a>{" "}
          to format templates. These contributions have been enthusiastically
          received by the AdonisJS community, with the framework authors
          considering making these tools the default formatter for EdgeJS. My
          work not only resolved a longstanding issue but also significantly
          enhanced the development experience for the community.
        </p>
      </div>
    </>
  );
}
