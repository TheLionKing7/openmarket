import { AUDIENCES } from '@/data/audiences';

const EXTRA_POINTS: Record<string, string[]> = {
  merchant: [
    'Preferred wholesaler + smart routing when stock shifts',
    'Payment verified before fulfillment begins',
    'Shop stock ledger with low-stock reorder prompts',
  ],
  distributor: [
    '95% payout on payment verified — no transfer chase',
    'High-density mobile ledger, not a consumer storefront',
    'Self-service onboarding: coverage, terms, inventory',
  ],
  affiliate: [
    'Paid by OpenMarket — not merchants or distributors',
    'Commission on first settled order, not sign-up alone',
    'Dashboard: referrals, activations, earned vs pending',
  ],
  manufacturer: [
    'Aggregated LGA demand velocity — no individual merchant PII',
    'SmartSubsidy campaigns with manufacturer co-pay',
    'Enterprise lane for tier-1 procurement as network density grows',
  ],
  logistics: [
    'Partner model — carriers bear delivery liability and insurance',
    'OpenMarket coordinates quotes; optional opt-in at checkout',
    'Platform fee on logistics transactions, not hidden in goods price',
  ],
};

const SECTION_TITLES: Record<string, { title: string; body: string }> = {
  merchant: {
    title: 'Restock without the reconciliation tax',
    body: 'Built for open-market shops operating one-handed on entry Android devices. Offline-safe orders, Seamless payment checkout, and settlement you can read at a glance.',
  },
  distributor: {
    title: 'Demand you can see. Payouts you can trust.',
    body: 'Asset-light virtual warehouse ledger — digitize stock you already hold. Fulfillment queue, payout status, and order stream from verified retailers in your coverage.',
  },
  affiliate: {
    title: 'Relationship-led growth. Definitive commission.',
    body: 'Market connectors, association reps, and community operators bring verified merchants onto the network — with trackable referrer codes and transparent activation rules.',
  },
  manufacturer: {
    title: 'Serious business upstream — not a kiosk catalog.',
    body: 'Manufacturers gain last-mile visibility and programmatic trade promotion without listing SKUs for five-carton orders. Enterprise analytics and campaign APIs for brands that operate at scale.',
  },
  logistics: {
    title: 'Licensed partners on verified trade lanes.',
    body: 'OpenMarket does not operate a fleet. Logistics firms join as partners — new order flow on wholesale corridors, transparent fees, and coordination without taking on fulfillment liability.',
  },
};

export function AudienceSections() {
  return (
    <div className="border-t border-border">
      {AUDIENCES.map((audience, index) => {
        const meta = SECTION_TITLES[audience.id];
        const points = EXTRA_POINTS[audience.id];
        const align = index % 2 === 1 ? 'right' : 'left';

        return (
          <section
            key={audience.id}
            id={audience.id === 'merchant' ? 'retailers' : audience.id === 'affiliate' ? 'partners' : audience.id}
            className={`py-24 lg:py-32 ${index % 2 === 1 ? 'bg-surface/50' : ''}`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
              <div className={align === 'right' ? 'lg:order-2' : ''}>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">
                  For {audience.label.toLowerCase()}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                  {meta.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{meta.body}</p>
                <ul className="mt-8 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-white/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={audience.anchor}
                  className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/25"
                >
                  {audience.registerCta}
                  <span aria-hidden>→</span>
                </a>
              </div>

              <div className={align === 'right' ? 'lg:order-1' : ''}>
                <AppScreenPlaceholder variant={audience.id} />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function AppScreenPlaceholder({
  variant,
}: {
  variant: (typeof AUDIENCES)[0]['id'];
}) {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-ink shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="h-2 w-16 rounded-full bg-white/20" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Preview</span>
        </div>

        {variant === 'merchant' && <MerchantPreview />}
        {variant === 'distributor' && <DistributorPreview />}
        {variant === 'affiliate' && <PartnerPreview />}
        {variant === 'manufacturer' && <ManufacturerPreview />}
        {variant === 'logistics' && <LogisticsPreview />}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
          Sanitized interface preview
        </p>
      </div>
    </div>
  );
}

function MerchantPreview() {
  return (
    <div className="space-y-3 p-4">
      <div className="flex items-center gap-2 rounded-lg bg-success/20 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-success" />
        <span className="text-xs text-white/80">Synced · 2 min ago</span>
      </div>
      {['Sugar 50kg', 'Cooking oil 20L', 'Milo 400g'].map((item) => (
        <div key={item} className="rounded-lg border border-border bg-surface-elevated p-3">
          <p className="screen-blur-sensitive text-sm font-medium text-white">{item}</p>
          <div className="mt-2 flex justify-between">
            <span className="screen-blur-sensitive font-mono text-xs text-accent">₦•••,•••</span>
            <span className="text-xs text-muted">In stock</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DistributorPreview() {
  return (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Fulfillment queue</p>
      {['ORD-••••', 'ORD-••••'].map((id, i) => (
        <div
          key={id}
          className="flex items-center justify-between rounded-lg border border-border bg-surface-elevated p-3"
        >
          <div>
            <p className="font-mono text-xs text-white">{id}</p>
            <p className="screen-blur-sensitive mt-1 text-[10px] text-muted">•• items · Mile 12</p>
          </div>
          <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] text-accent-soft">
            {i === 0 ? 'Pay verified' : 'Pending'}
          </span>
        </div>
      ))}
    </div>
  );
}

function PartnerPreview() {
  return (
    <div className="space-y-3 p-4">
      <div className="rounded-lg border border-dashed border-accent/40 bg-accent/5 p-3 text-center">
        <p className="font-mono text-xs text-accent-soft">REF-••••••</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Sign-ups', 'Active', 'Earned'].map((label) => (
          <div key={label} className="rounded-lg bg-surface-elevated p-2 text-center">
            <p className="font-mono text-sm text-white">••</p>
            <p className="text-[9px] text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManufacturerPreview() {
  return (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Demand telemetry</p>
      <div className="h-24 rounded-lg bg-surface-elevated p-3">
        <div className="flex h-full items-end gap-1">
          {[40, 65, 50, 80, 55, 70, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-primary/50" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-3">
        <p className="text-[10px] text-accent-soft">SmartSubsidy · Lagos cluster</p>
        <p className="screen-blur-sensitive mt-1 text-xs text-white">₦••• off · 48h campaign</p>
      </div>
    </div>
  );
}

function LogisticsPreview() {
  return (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Partner jobs</p>
      {['Lagos → Accra', 'Aba → Onitsha'].map((route, i) => (
        <div key={route} className="rounded-lg border border-border bg-surface-elevated p-3">
          <p className="text-xs text-white">{route}</p>
          <p className="mt-1 text-[10px] text-muted">{i === 0 ? 'Quote accepted' : 'Awaiting pickup'}</p>
        </div>
      ))}
    </div>
  );
}
