import { V2Header } from '@/components/v2/V2Header';
import { V2Hero } from '@/components/v2/V2Hero';
import { V2MarketStrip } from '@/components/v2/V2MarketStrip';
import { V2AudienceLanes } from '@/components/v2/V2AudienceLanes';
import { V2RegisterSection } from '@/components/v2/V2RegisterSection';
import { V2Footer } from '@/components/v2/V2Footer';

/** Design v2 preview — light editorial lane + operational architecture chart */
export default function V2HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <V2Header />
      <V2Hero />
      <V2MarketStrip />
      <V2AudienceLanes />
      <V2RegisterSection />
      <V2Footer />
    </main>
  );
}
