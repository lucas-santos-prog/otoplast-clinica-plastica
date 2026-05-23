import ServicesBannerSection from "@/components/website/sections/services/ServicesBannerSection";
import ServicesFAQSection from "@/components/website/sections/services/ServicesFAQSection";
import ServicesGridSection from "@/components/website/sections/services/ServicesGridSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesBannerSection />
      <ServicesGridSection />
      <ServicesFAQSection />
    </>
  );
}
