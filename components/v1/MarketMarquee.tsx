import { MARKET_HUBS } from '@/data/markets';
import { MarketCard } from './MarketCard';

function MarqueeRow({ direction }: { direction: 'left' | 'right' }) {
  const items = [...MARKET_HUBS, ...MARKET_HUBS];
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex w-max ${animationClass}`}>
        {items.map((market, i) => (
          <MarketCard key={`${market.imageFile}-${i}`} {...market} />
        ))}
      </div>
    </div>
  );
}

export function MarketMarquee() {
  return (
    <section id="markets" className="relative w-full overflow-x-hidden border-y border-border bg-surface py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent sm:w-32" />

      <div className="mb-4 px-6 text-center lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent/80">
          Open markets · One continent
        </p>
      </div>

      <MarqueeRow direction="left" />
      <MarqueeRow direction="right" />
    </section>
  );
}
