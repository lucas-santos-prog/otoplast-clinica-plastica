import AboutBannerSection from "@/components/website/sections/about/AboutBannerSection";
import AboutFounderSection from "@/components/website/sections/about/AboutFounderSection";
import AboutInfrastructureSection from "@/components/website/sections/about/AboutInfrastructureSection";
import AboutTimelineSection from "@/components/website/sections/about/AboutTimelineSection";
import AboutValuesSection from "@/components/website/sections/about/AboutValuesSection";

export default function AboutPage() {
  return (
    <>
      <AboutBannerSection />
      <AboutFounderSection />
      <AboutValuesSection />
      <AboutTimelineSection />
      <AboutInfrastructureSection />
    </>
  );
}
