import { V2Header } from '@/components/v2/V2Header';
import { V2Hero } from '@/components/v2/V2Hero';
import { V2MarketMarquee } from '@/components/v2/V2MarketMarquee';
import { V2ArchitectureSection } from '@/components/v2/V2ArchitectureSection';
import { V2PositioningBand } from '@/components/v2/V2PositioningBand';
import { V2AudienceLanes } from '@/components/v2/V2AudienceLanes';
import { V2AudienceSections } from '@/components/v2/V2AudienceSections';
import { V2TrustAndData } from '@/components/v2/V2TrustAndData';
import { V2RegisterSection } from '@/components/v2/V2RegisterSection';
import { V2Footer } from '@/components/v2/V2Footer';

/** Production landing — light editorial theme */
export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <V2Header />
      <V2Hero />
      <V2MarketMarquee />
      <V2ArchitectureSection />
      <V2PositioningBand />
      <V2AudienceLanes />
      <V2AudienceSections />
      <V2TrustAndData />
      <V2RegisterSection />
      <V2Footer />
    </main>
  );
}
