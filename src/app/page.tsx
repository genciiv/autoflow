import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";

import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { WorkflowSection } from "@/components/landing/workflow-section";
import { FAQSection } from "@/components/landing/faq-section";


export default function HomePage() {
  return (
    <>
      <MarketingNavbar />
    <main>
      
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
    </>
  );
}