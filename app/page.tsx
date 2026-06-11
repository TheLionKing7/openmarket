import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MarketMarquee } from '@/components/MarketMarquee';
import { PositioningBand } from '@/components/PositioningBand';
import { PlatformFlow } from '@/components/PlatformFlow';
import { AudienceSections } from '@/components/AudienceSections';
import { TrustAndData } from '@/components/TrustAndData';
import { RegisterSection } from '@/components/RegisterSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
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
