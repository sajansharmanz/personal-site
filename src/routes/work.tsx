import SectionHeading from "../components/SectionHeading";
import WorkSection from "../components/WorkSection";

export default function Work() {
  return (
    <div>
      <SectionHeading title="My Work" />

      <div className="my-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">My Work</h1>
        <p className="leading-7 text-slate-500">
          Explore my past projects to see how I can transform ideas into
          impactful digital experiences.
        </p>
      </div>

      <WorkSection />
    </div>
  );
}
