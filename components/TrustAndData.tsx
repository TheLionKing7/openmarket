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

export function TrustAndData() {
  return (
    <>
      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">
                Premier trust brand
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                Infrastructure that earns its place on the market floor.
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                OpenMarket is built for traders who cannot afford failed payments, lost orders, or
                opaque middlemen. Steady, capable, grounded — the opposite of hype.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {TRUST_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-border bg-surface-elevated p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="gold-line mb-16 w-full max-w-md" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">
                Data-driven framework
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                AI-powered coordination — when density demands it.
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Phase 1 is human-trust infrastructure: verified payments, ledgers, fulfillment. As
                merchant and distributor density grows across hubs, the platform layers intelligent
                routing, demand telemetry, and cross-border trade signals — without exposing
                individual trader identity upstream.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-ink p-6 font-mono text-sm">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <span className="text-xs uppercase tracking-widest text-muted">Signal layer</span>
                <span className="flex items-center gap-2 text-xs text-success">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-success" />
                  Aggregating
                </span>
              </div>
              <div className="space-y-3">
                {DATA_SIGNALS.map((row) => (
                  <div
                    key={row.metric}
                    className="flex items-center justify-between rounded-lg bg-surface-elevated px-4 py-3"
                  >
                    <span className="text-white/90">{row.metric}</span>
                    <span className="text-xs text-accent">{row.status}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-muted">
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
