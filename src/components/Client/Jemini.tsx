import SectionHeading from "../SectionHeading";

export default function Jemini() {
  return (
    <>
      <SectionHeading title="Jemini" />

      <div className="my-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Jemini</h1>

        <p className="my-8 leading-7 text-slate-500">
          At Jemini, I was an integral part of the squad responsible for
          delivering cutting-edge greenfield HR/Payroll software. As a fullstack
          consultant, I played a crucial role in architecting implementations of
          new requirements, creating and maintaining user interfaces for both
          web and mobile platforms, efficiently fixing bugs, integrating with
          external systems, and owning the DevOps pipeline for PowerBI reports.
          <br />
          <br />
          One of my significant achievements was designing, developing, and
          implementing a DevOps pipeline that automated the deployment of
          PowerBI reports to multiple customer environments within a single
          PowerBI tenant. This innovation dramatically reduced a process that
          previously took hours to less than 20 minutes per release, saving the
          company thousands of dollars in licensing costs and earning widespread
          praise from the internal team.
          <br />
          <br />
          Another notable success was the implementation of a timeline schedule
          calendar, which simplified team management for customers and garnered
          substantial appreciation from both clients and the internal team.
          Despite the lack of documentation for the calendar's API, I
          effectively integrated it under tight deadlines.
          <br />
          <br />
          Additionally, I restructured the project's CSS layout, replacing
          outdated tables and floats with a modern flexbox solution, delivering
          this enhancement well before the deadline without introducing any
          bugs.
          <br />
          <br />
          I also implemented a PowerBI embedded solution, allowing customers to
          generate reports directly within the application, thereby enhancing
          user experience and avoiding the need to navigate to the PowerBI
          website.
          <br />
          <br />
          Throughout my time at Jemini, I mentored junior and new staff,
          providing guidance on the tech stack, engaging in pair programming,
          conducting ongoing code reviews, and being available to support their
          development and ease their workflow.
        </p>
      </div>
    </>
  );
}
