import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TrustBanner } from '../components/TrustBanner';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { IngredientsShowcase } from '../components/IngredientsShowcase';
import { TrustAssurance } from '../components/TrustAssurance';
import { TrustStatsSection } from '../components/TrustStatsSection';
import { SocialProofFAQ } from '../components/SocialProofFAQ';
import { OrderSection } from '../components/OrderSection';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export function Home() {
  return (
    <main>
      <Header />
        <Hero />
        <TrustBanner />
        <BenefitsGrid />
        <IngredientsShowcase />
        <TrustAssurance />
        <TrustStatsSection />
        <SocialProofFAQ />
        <OrderSection />
        <FloatingWhatsApp />
    </main>
  );
}
