import { Header } from '@/components/v1/Header';
import { Hero } from '@/components/v1/Hero';
import { MarketMarquee } from '@/components/v1/MarketMarquee';
import { PositioningBand } from '@/components/v1/PositioningBand';
import { PlatformFlow } from '@/components/v1/PlatformFlow';
import { AudienceSections } from '@/components/v1/AudienceSections';
import { TrustAndData } from '@/components/v1/TrustAndData';
import { RegisterSection } from '@/components/v1/RegisterSection';
import { Footer } from '@/components/v1/Footer';

/** Archived design v1 — available at /v1 for reference only */
export default function V1ArchivePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-ink">
      <Header />
      <Hero />
      <MarketMarquee />
      <PositioningBand />
      <PlatformFlow />
      <AudienceSections />
      <TrustAndData />
      <RegisterSection />
      <Footer />
    </main>
  );
}
