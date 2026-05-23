import ContactAddressMapSection from "@/components/website/sections/contact/ContactAddressMapSection";
import ContactBannerSection from "@/components/website/sections/contact/ContactBannerSection";
import ContactContactWaysSection from "@/components/website/sections/contact/ContactContactWaysSection";
import ContactFormSection from "@/components/website/sections/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      <ContactBannerSection />
      <ContactFormSection />
      <ContactContactWaysSection />
      <ContactAddressMapSection />
    </>
  );
}
