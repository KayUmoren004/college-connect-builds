import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { FeaturesGrid } from "@/components/site/features-grid";
import { ScreenshotsSection } from "@/components/site/screenshots-section";
import { FAQSection } from "@/components/site/faq-accordion";
import { CTASection } from "@/components/site/cta-section";
import { Footer } from "@/components/site/footer";
import { NoiseOverlay } from "@/components/site/noise-overlay";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NoiseOverlay />
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <ScreenshotsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
