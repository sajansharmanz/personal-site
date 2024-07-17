import SectionHeading from "../components/SectionHeading";
import ServicesSection from "../components/ServicesSection";

export default function Services() {
  return (
    <div>
      <SectionHeading title="Services" />

      <div className="my-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">My Services</h1>
        <p className="leading-7 text-slate-500">
          Explore the range of services I offer to elevate your digital presence
          and drive your business forward.
        </p>
      </div>

      <ServicesSection />
    </div>
  );
}
