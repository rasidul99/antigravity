import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TrustBanner } from '../components/TrustBanner';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { IngredientsShowcase } from '../components/IngredientsShowcase';
import { TrustAssurance } from '../components/TrustAssurance';
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
      <SocialProofFAQ />
      <OrderSection />
      <FloatingWhatsApp />
    </main>
  );
}
