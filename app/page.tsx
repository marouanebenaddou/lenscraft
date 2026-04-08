import Navbar from "@/components/Navbar";
import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import ClientsProofSection from "@/components/ClientsProofSection";
import PricingSection from "@/components/PricingSection";
import TrendingSection from "@/components/TrendingSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import ContentCatalogSection from "@/components/ContentCatalogSection";
import ChannelLogosSection from "@/components/ChannelLogosSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoverageSection from "@/components/CoverageSection";
import FreeTestSection from "@/components/FreeTestSection";
import FAQSection from "@/components/FAQSection";
import SupportSection from "@/components/SupportSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingElements />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="clients">
          <ClientsProofSection />
        </section>
        <section id="trending">
          <TrendingSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="pourquoi-nous">
          <WhyChooseUsSection />
        </section>
        <section id="compatibilite">
          <CompatibilitySection />
        </section>
        <section id="catalogue">
          <ContentCatalogSection />
        </section>
        <section id="chaines">
          <ChannelLogosSection />
        </section>
        <section id="garantie">
          <GuaranteeSection />
        </section>
        <section id="fonctionnalites">
          <FeaturesSection />
        </section>
        <section id="couverture">
          <CoverageSection />
        </section>
        <section id="test-gratuit">
          <FreeTestSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="support">
          <SupportSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
