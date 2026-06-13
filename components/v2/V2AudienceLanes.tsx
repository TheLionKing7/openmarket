import Link from 'next/link';
import { AUDIENCES } from '@/data/audiences';

export function V2AudienceLanes() {
  return (
    <section id="platform" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-v2-display)] text-2xl font-semibold text-[var(--v2-ink)] sm:text-3xl">
          Five lanes. One coordination layer.
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--v2-muted)]">
          Not a consumer marketplace — infrastructure for traders, wholesalers, partners, and upstream
          brands who already move goods within and across borders every day.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <Link
              key={a.id}
              href={`/v2${a.anchor}`}
              className="group rounded-lg border border-[var(--v2-line)] bg-white p-5 transition hover:border-[var(--v2-green)] hover:shadow-[0_12px_40px_-24px_rgba(27,94,59,0.35)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v2-green)]">
                {a.label}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-v2-display)] text-lg font-semibold text-[var(--v2-ink)] group-hover:text-[var(--v2-green)]">
                {a.headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--v2-muted)]">{a.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--v2-green)]">
                {a.registerCta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
