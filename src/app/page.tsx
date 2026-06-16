import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";

import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { MarketingNavbar } from "@/components/marketing/navbar";

export default function HomePage() {
  return (
    <main>
      <MarketingNavbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}