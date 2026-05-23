import HomeAboutSection from "@/components/website/sections/home/HomeAboutSection";
import HomeCredentialsSection from "@/components/website/sections/home/HomeCredentialsSection";
import HomeCTABannerSection from "@/components/website/sections/home/HomeCTABannerSection";
import HomeHeroSection from "@/components/website/sections/home/HomeHeroSection";
import HomeHowItWorkSection from "@/components/website/sections/home/HomeHowItWorkSection";
import HomeResultSection from "@/components/website/sections/home/HomeResultSection";
import HomeServicesGridSection from "@/components/website/sections/home/HomeServicesGridSection";
import HomeStatsBarSection from "@/components/website/sections/home/HomeStatsBarSection";
import HomeTeamSection from "@/components/website/sections/home/HomeTeamSection";
import HomeTestimonialsSection from "@/components/website/sections/home/HomeTestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeStatsBarSection />
      <HomeAboutSection />
      <HomeServicesGridSection />
      <HomeCredentialsSection />
      <HomeHowItWorkSection />
      <HomeResultSection />
      <HomeTeamSection />
      <HomeTestimonialsSection />
      <HomeCTABannerSection />
    </>
  );
}
