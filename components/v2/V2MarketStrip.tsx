import { MARKET_HUBS } from '@/data/markets';
import { MarketCard } from '@/components/v1/MarketCard';

export function V2MarketStrip() {
  const row = MARKET_HUBS.slice(0, 6);

  return (
    <section id="markets" className="border-b border-[var(--v2-line)] bg-[var(--v2-paper-deep)] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-v2-display)] text-2xl font-semibold text-[var(--v2-ink)]">
              Pan-African market hubs
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--v2-muted)]">
              Demand clusters across the continent — local by design, connected by trust and settlement.
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {row.map((market) => (
            <div key={market.name} className="snap-start shrink-0">
              <MarketCard {...market} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
