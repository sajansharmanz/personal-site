import WorkItem from "./item";

export default function WorkSection() {
  return (
    <div className="rounded-xl bg-slate-100 p-4">
      <div className="flex w-full flex-col items-start justify-start space-y-4">
        <WorkItem title="Open Source" to="/work/open-source" />
        <WorkItem title="Nimble Approach" to="/work/nimble-approach" />
        <WorkItem title="Sky Vegas" to="/work/sky-vegas" />
        <WorkItem title="SCC France" to="/work/scc-france" />
        <WorkItem title="Fusion5" to="/work/fusion5" />
        <WorkItem title="Jemini" to="/work/jemini" />
        <WorkItem title="MyWorkplace" to="/work/my-workplace" />
        <WorkItem
          title="Ultimate Body Transformation"
          to="/work/ultimate-body-transformation"
        />
        <WorkItem title="Bay Supplements" to="/work/bay-supplements" />
      </div>
    </div>
  );
}
