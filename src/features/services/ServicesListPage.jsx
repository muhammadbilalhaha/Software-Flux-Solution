
import DashboardFeature from "./components/DashboardFeature";
import SaaSDeeDive from "./components/SaaSDeeDive";
import SolutionsGrid from "./components/SolutionsGrid";
import ServicesCTA from "./components/ServicesCTA";
import ServicesHero from "./components/ServiceHero";
import ServicesGrid from "./components/ServiceGrid";

export default function ServicesListPage() {
  return (
    <>
      <ServicesHero/>
      <DashboardFeature />
      <ServicesGrid/>
      <SaaSDeeDive />
      <SolutionsGrid />
      <ServicesCTA />
    </>
  );
}