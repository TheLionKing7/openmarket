const TRUST_PILLARS = [
  {
    title: 'Settlement integrity',
    body: 'Payment verification is product design — not a back-office afterthought. Every naira traceable.',
  },
  {
    title: 'Offline honesty',
    body: 'Orders survive network drops. Local state is visible; sync status is never hidden.',
  },
  {
    title: 'Verified participants',
    body: 'Merchants, distributors, and partners onboard with identity — not anonymous listings.',
  },
  {
    title: 'Partner logistics',
    body: 'Licensed carriers on verified lanes — you deliver, OpenMarket coordinates. Optional at checkout, never platform-operated fleet.',
  },
];

const DATA_SIGNALS = [
  { metric: 'LGA demand velocity', status: 'Live telemetry' },
  { metric: 'Cross-border routing', status: 'AI coordination' },
  { metric: 'Stockout risk index', status: 'Predictive' },
  { metric: 'Subsidy campaigns', status: 'Manufacturer tier' },
];

export function V2TrustAndData() {
  return (
    <>
      <section className="border-t border-[var(--v2-line)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--v2-green)]">
                Premier trust brand
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-v2-display)] text-3xl font-semibold text-[var(--v2-ink)] sm:text-4xl">
                Infrastructure that earns its place on the market floor.
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--v2-muted)]">
                OpenMarket is built for traders who cannot afford failed payments, lost orders, or
                opaque middlemen. Steady, capable, grounded — the opposite of hype.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {TRUST_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-lg border border-[var(--v2-line)] bg-white p-6 shadow-sm"
                >
                  <h3 className="font-[family-name:var(--font-v2-display)] text-lg font-semibold text-[var(--v2-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--v2-muted)]">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--v2-line)] bg-[var(--v2-paper-deep)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 h-px w-full max-w-md bg-gradient-to-r from-[var(--v2-gold)] to-transparent" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--v2-green)]">
                Data-driven framework
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-v2-display)] text-3xl font-semibold text-[var(--v2-ink)] sm:text-4xl">
                AI-powered coordination — when density demands it.
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--v2-muted)]">
                Phase 1 is human-trust infrastructure: verified payments, ledgers, fulfillment. As
                merchant and distributor density grows across hubs, the platform layers intelligent
                routing, demand telemetry, and cross-border trade signals — without exposing
                individual trader identity upstream.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--v2-line-strong)] bg-[var(--v2-ink)] p-6 font-mono text-sm shadow-lg">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-white/50">Signal layer</span>
                <span className="flex items-center gap-2 text-xs text-[var(--v2-green-soft)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--v2-green)]" />
                  Aggregating
                </span>
              </div>
              <div className="space-y-3">
                {DATA_SIGNALS.map((row) => (
                  <div
                    key={row.metric}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3"
                  >
                    <span className="text-white/90">{row.metric}</span>
                    <span className="text-xs text-[var(--v2-gold)]">{row.status}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-white/50">
                Pan-African ambition, expressed through local market truth — not a single generic
                storefront narrative.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
