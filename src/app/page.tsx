import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";

import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { WorkflowSection } from "@/components/landing/workflow-section";

export default function HomePage() {
  return (
    <>
      <MarketingNavbar />
    <main>
      
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <CTASection />
      <Footer />
    </main>
    </>
  );
}