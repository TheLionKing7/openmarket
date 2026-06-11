import Link from 'next/link';
import { AUDIENCES } from '@/data/audiences';

const HERO_ACCENTS: Record<string, string> = {
  merchant: 'border-primary/50 bg-primary/10 hover:bg-primary/20',
  distributor: 'border-accent/40 bg-accent/10 hover:bg-accent/20',
  affiliate: 'border-white/20 bg-white/5 hover:bg-white/10',
  manufacturer: 'border-accent/30 bg-surface-elevated hover:border-accent/50',
  logistics: 'border-primary/30 bg-surface-elevated hover:border-primary/50',
};

export function Hero() {
  const primary = AUDIENCES.filter((a) =>
    ['merchant', 'distributor', 'affiliate'].includes(a.id),
  );
  const secondary = AUDIENCES.filter((a) =>
    ['manufacturer', 'logistics'].includes(a.id),
  );

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -right-32 top-20 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/90 sm:text-xs sm:tracking-[0.4em] motion-safe:animate-fade-up">
          Intra-continental trade infrastructure
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white motion-safe:animate-fade-up sm:text-5xl lg:text-6xl [animation-delay:0.1s] [animation-fill-mode:both]">
          Where Africa&apos;s open markets{' '}
          <span className="text-accent-soft">meet verified commerce.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted motion-safe:animate-fade-up sm:text-xl [animation-delay:0.2s] [animation-fill-mode:both]">
          OpenMarket coordinates wholesale trade across the continent&apos;s great market hubs — local
          by design, connected by trust, settlement, and data.
        </p>

        <div className="mt-10 grid gap-4 motion-safe:animate-fade-up sm:mt-14 md:grid-cols-3 [animation-delay:0.35s] [animation-fill-mode:both]">
          {primary.map((item) => (
            <AudienceCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 motion-safe:animate-fade-up md:grid-cols-2 [animation-delay:0.45s] [animation-fill-mode:both]">
          {secondary.map((item) => (
            <AudienceCard key={item.id} item={item} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  item,
  compact,
}: {
  item: (typeof AUDIENCES)[0];
  compact?: boolean;
}) {
  return (
    <Link
      href={item.anchor}
      className={`group flex flex-col rounded-2xl border p-6 transition-all duration-300 ${HERO_ACCENTS[item.id]}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">{item.label}</span>
      <span
        className={`mt-3 font-display font-semibold text-white group-hover:text-accent-soft ${
          compact ? 'text-xl' : 'text-2xl'
        }`}
      >
        {item.headline}
      </span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.summary}</span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
        {item.registerCta}
        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </span>
    </Link>
  );
}
