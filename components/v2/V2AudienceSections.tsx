import Link from 'next/link';
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

export function V2AudienceSections() {
  return (
    <div className="border-t border-[var(--v2-line)]">
      {AUDIENCES.map((audience, index) => {
        const meta = SECTION_TITLES[audience.id];
        const points = EXTRA_POINTS[audience.id];
        const align = index % 2 === 1 ? 'right' : 'left';

        return (
          <section
            key={audience.id}
            id={audience.sectionId}
            className={`py-16 sm:py-20 lg:py-24 ${index % 2 === 1 ? 'bg-[var(--v2-paper-deep)]' : 'bg-white'}`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
              <div className={align === 'right' ? 'lg:order-2' : ''}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--v2-green)]">
                  For {audience.label.toLowerCase()}
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-v2-display)] text-3xl font-semibold text-[var(--v2-ink)] sm:text-4xl">
                  {meta.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--v2-muted)]">{meta.body}</p>
                <ul className="mt-8 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-[var(--v2-ink)]">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--v2-green)]"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={audience.anchor}
                  className="mt-10 inline-flex items-center gap-2 rounded-md bg-[var(--v2-green)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {audience.registerCta}
                  <span aria-hidden>→</span>
                </Link>
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
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--v2-green)]/15 to-[var(--v2-gold)]/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--v2-line-strong)] bg-[var(--v2-ink)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="h-2 w-16 rounded-full bg-white/20" />
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40">Preview</span>
        </div>

        {variant === 'merchant' && <MerchantPreview />}
        {variant === 'distributor' && <DistributorPreview />}
        {variant === 'affiliate' && <PartnerPreview />}
        {variant === 'manufacturer' && <ManufacturerPreview />}
        {variant === 'logistics' && <LogisticsPreview />}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--v2-ink)]/80 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 text-center text-[10px] font-semibold uppercase tracking-widest text-white/40">
          Sanitized interface preview
        </p>
      </div>
    </div>
  );
}

function MerchantPreview() {
  return (
    <div className="space-y-3 p-4">
      <div className="flex items-center gap-2 rounded-lg bg-[var(--v2-green)]/20 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[var(--v2-green)]" />
        <span className="text-xs text-white/80">Synced · 2 min ago</span>
      </div>
      {['Sugar 50kg', 'Cooking oil 20L', 'Milo 400g'].map((item) => (
        <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-3">
          <p className="screen-blur-sensitive text-sm font-medium text-white">{item}</p>
          <div className="mt-2 flex justify-between">
            <span className="screen-blur-sensitive font-mono text-xs text-[var(--v2-gold)]">₦•••,•••</span>
            <span className="text-xs text-white/50">In stock</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DistributorPreview() {
  return (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Fulfillment queue</p>
      {['ORD-••••', 'ORD-••••'].map((id, i) => (
        <div
          key={id}
          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3"
        >
          <div>
            <p className="font-mono text-xs text-white">{id}</p>
            <p className="screen-blur-sensitive mt-1 text-[10px] text-white/50">•• items · Mile 12</p>
          </div>
          <span className="rounded-full bg-[var(--v2-gold)]/20 px-2 py-0.5 text-[10px] text-[var(--v2-gold)]">
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
      <div className="rounded-lg border border-dashed border-[var(--v2-gold)]/40 bg-[var(--v2-gold)]/5 p-3 text-center">
        <p className="font-mono text-xs text-[var(--v2-gold)]">REF-••••••</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Sign-ups', 'Active', 'Earned'].map((label) => (
          <div key={label} className="rounded-lg bg-white/5 p-2 text-center">
            <p className="font-mono text-sm text-white">••</p>
            <p className="text-[9px] text-white/50">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManufacturerPreview() {
  return (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Demand telemetry</p>
      <div className="h-24 rounded-lg bg-white/5 p-3">
        <div className="flex h-full items-end gap-1">
          {[40, 65, 50, 80, 55, 70, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-[var(--v2-green)]/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-[var(--v2-gold)]/30 bg-[var(--v2-gold)]/5 p-3">
        <p className="text-[10px] text-[var(--v2-gold)]">SmartSubsidy · Lagos cluster</p>
        <p className="screen-blur-sensitive mt-1 text-xs text-white">₦••• off · 48h campaign</p>
      </div>
    </div>
  );
}

function LogisticsPreview() {
  return (
    <div className="space-y-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Partner jobs</p>
      {['Lagos → Accra', 'Aba → Onitsha'].map((route, i) => (
        <div key={route} className="rounded-lg border border-white/10 bg-white/5 p-3">
          <p className="text-xs text-white">{route}</p>
          <p className="mt-1 text-[10px] text-white/50">{i === 0 ? 'Quote accepted' : 'Awaiting pickup'}</p>
        </div>
      ))}
    </div>
  );
}
