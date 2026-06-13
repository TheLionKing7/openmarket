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

export function V2PositioningBand() {
  return (
    <section className="border-b border-[var(--v2-line)] bg-[var(--v2-paper-deep)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--v2-green)]">
            What we are
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-v2-display)] text-3xl font-semibold text-[var(--v2-ink)] sm:text-4xl">
            Africa&apos;s trade coordination layer — local hubs, continental reach.
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--v2-muted)]">
            OpenMarket is infrastructure for verified wholesale commerce: not a consumer storefront, not
            a logistics operator, and not a factory catalog for kiosk orders. Three lanes, one trust
            brand.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {LANES.map((lane) => (
            <div
              key={lane.title}
              className="rounded-lg border border-[var(--v2-line)] bg-white p-6 shadow-sm"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--v2-green)]">
                {lane.for}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-v2-display)] text-xl font-semibold text-[var(--v2-ink)]">
                {lane.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--v2-muted)]">{lane.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
