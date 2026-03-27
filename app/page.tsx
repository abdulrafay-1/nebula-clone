import { HeroSection } from "@/src/components/HeroSection";
import { ReasonsSection } from "@/src/components/ReasonsSection";
import { ServicesSection } from "@/src/components/ServicesSection";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { TrustCtaSection } from "@/src/components/TrustCtaSection";
import { WhatsappFloatingButton } from "@/src/components/WhatsappFloatingButton";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ReasonsSection />
        <TrustCtaSection />
      </main>
      <SiteFooter />
      <WhatsappFloatingButton />
    </>
  );
}
