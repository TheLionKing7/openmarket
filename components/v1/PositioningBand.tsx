const LANES = [
  {
    title: 'Last-mile trade',
    body: 'Merchants restock · Distributors fulfill · Settlement verified on every order.',
    for: 'Retailers & wholesalers',
  },
  {
    title: 'Upstream intelligence',
    body: 'Demand telemetry · SmartSubsidy campaigns · Category velocity by market cluster.',
    for: 'Manufacturers',
  },
  {
    title: 'Partner logistics',
    body: 'Licensed carriers on verified lanes. You deliver — OpenMarket coordinates, never competes on fleet.',
    for: 'Logistics firms',
  },
];

export function PositioningBand() {
  return (
    <section className="border-t border-border bg-surface/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">What we are</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Africa&apos;s trade coordination layer — local hubs, continental reach.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            OpenMarket is infrastructure for verified wholesale commerce: not a consumer storefront, not
            a logistics operator, and not a factory catalog for kiosk orders. Three lanes, one trust
            brand.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {LANES.map((lane) => (
            <div key={lane.title} className="rounded-xl border border-border bg-surface-elevated p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">{lane.for}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{lane.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{lane.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
