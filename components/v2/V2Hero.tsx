import Link from 'next/link';
import { AUDIENCES } from '@/data/audiences';

const HERO_ACCENTS: Record<string, string> = {
  merchant: 'border-[var(--v2-green)]/30 bg-[var(--v2-green-soft)] hover:border-[var(--v2-green)]',
  distributor: 'border-[var(--v2-gold)]/40 bg-[var(--v2-gold-soft)] hover:border-[var(--v2-gold)]',
  affiliate: 'border-[var(--v2-line-strong)] bg-white hover:border-[var(--v2-green)]',
  manufacturer: 'border-[var(--v2-gold)]/30 bg-white hover:border-[var(--v2-gold)]',
  logistics: 'border-[var(--v2-green)]/25 bg-white hover:border-[var(--v2-green)]',
};

export function V2Hero() {
  const primary = AUDIENCES.filter((a) => ['merchant', 'distributor', 'affiliate'].includes(a.id));
  const secondary = AUDIENCES.filter((a) => ['manufacturer', 'logistics'].includes(a.id));

  return (
    <section className="border-b border-[var(--v2-line)] pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--v2-green)]">
          Intra-continental trade infrastructure
        </p>

        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-v2-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--v2-ink)] sm:text-5xl lg:text-6xl">
          Where Africa&apos;s open markets{' '}
          <span className="text-[var(--v2-green)]">meet verified commerce.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--v2-muted)] sm:text-xl">
          OpenMarket coordinates wholesale trade across the continent&apos;s great market hubs — local
          by design, connected by trust, settlement, and data.
        </p>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
          {primary.map((item) => (
            <AudienceCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
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
      className={`group flex flex-col rounded-lg border p-6 transition-all duration-200 ${HERO_ACCENTS[item.id]}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--v2-muted)]">
        {item.label}
      </span>
      <span
        className={`mt-3 font-[family-name:var(--font-v2-display)] font-semibold text-[var(--v2-ink)] group-hover:text-[var(--v2-green)] ${
          compact ? 'text-xl' : 'text-2xl'
        }`}
      >
        {item.headline}
      </span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-[var(--v2-muted)]">{item.summary}</span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--v2-green)]">
        {item.registerCta}
        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </span>
    </Link>
  );
}
