const STEPS = [
  {
    label: 'Order',
    title: 'Merchant restocks',
    body: 'From their preferred wholesaler — or a routed alternative when stock demands it.',
  },
  {
    label: 'Pay',
    title: 'Settlement verified',
    body: 'Card, bank, USSD, transfer, or QR. Instant verification through trusted payment rails.',
  },
  {
    label: 'Split',
    title: 'Programmatic ledger',
    body: '95% to distributor. Platform fee transparent. No reconciliation chase.',
  },
  {
    label: 'Fulfill',
    title: 'VWL + logistics',
    body: 'Distributors fulfill from virtual warehouse stock. Optional contracted logistics layer.',
  },
];

export function PlatformFlow() {
  return (
    <section id="platform" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">How it works</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            One coordination layer. Five trusted lanes.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Not a consumer marketplace — infrastructure for the traders, wholesalers, and partners who
            already move goods within and across borders every day.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.label} className="bg-surface-elevated p-8">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                {step.label}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
