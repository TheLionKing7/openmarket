const SW = 2;

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
  fill = '#ffffff',
  stroke = 'var(--v2-line-strong)',
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  fill?: string;
  stroke?: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={fill}
        stroke={stroke}
        strokeWidth={SW}
        strokeDasharray={dashed ? '6 4' : undefined}
      />
      <text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 4 : h / 2 + 5)}
        textAnchor="middle"
        className="fill-[var(--v2-ink)] text-[11px] font-semibold"
        style={{ fontFamily: 'var(--font-v2-sans)' }}
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          className="fill-[var(--v2-muted)] text-[9px]"
          style={{ fontFamily: 'var(--font-v2-sans)' }}
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({ d, dashed = false, gold = false }: { d: string; dashed?: boolean; gold?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={gold ? 'var(--v2-gold)' : 'var(--v2-green)'}
      strokeWidth={SW}
      strokeDasharray={dashed ? '5 4' : undefined}
      markerEnd="url(#arrowhead)"
    />
  );
}

export function OperationalArchitecture({ centered = false }: { centered?: boolean }) {
  return (
    <figure className={`w-full ${centered ? 'mx-auto' : ''}`}>
      <div className="overflow-x-auto rounded-xl border border-[var(--v2-line-strong)] bg-white p-4 shadow-[0_24px_60px_-40px_rgba(10,15,20,0.35)] sm:p-6">
        <svg
          viewBox="0 0 920 560"
          className="mx-auto h-auto min-w-[720px] w-full max-w-4xl"
          role="img"
          aria-labelledby="arch-title arch-desc"
        >
          <title id="arch-title">OpenMarket operational architecture</title>
          <desc id="arch-desc">
            Merchant orders flow through payment verification and a programmatic ledger split to
            distributor fulfillment, with optional partner logistics, affiliate growth, and upstream
            manufacturer telemetry.
          </desc>

          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="var(--v2-green)" />
            </marker>
            <marker id="arrowhead-gold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="var(--v2-gold)" />
            </marker>
          </defs>

          {/* Upstream lane */}
          <text x={460} y={28} textAnchor="middle" className="fill-[var(--v2-muted)] text-[10px] uppercase tracking-[0.2em]">
            Upstream · read-only
          </text>
          <Node x={340} y={40} w={240} h={52} label="Manufacturer tier" sub="Telemetry · SmartSubsidy" dashed fill="var(--v2-paper)" />
          <path d="M460 92 L460 118" stroke="var(--v2-muted)" strokeWidth={1.5} strokeDasharray="4 4" fill="none" />

          {/* Core hub */}
          <text x={460} y={132} textAnchor="middle" className="fill-[var(--v2-muted)] text-[10px] uppercase tracking-[0.2em]">
            Coordination core
          </text>
          <rect x={320} y={142} width={280} height={72} rx={8} fill="var(--v2-gold-soft)" stroke="var(--v2-gold)" strokeWidth={2.5} />
          <text x={460} y={172} textAnchor="middle" className="fill-[var(--v2-ink)] text-[13px] font-bold">
            OpenMarket ledger
          </text>
          <text x={460} y={192} textAnchor="middle" className="fill-[var(--v2-muted)] text-[10px]">
            Verify · split · route · audit
          </text>

          {/* Transactional lane labels */}
          <text x={120} y={132} textAnchor="middle" className="fill-[var(--v2-muted)] text-[10px] uppercase tracking-[0.15em]">
            Transactional
          </text>
          <text x={800} y={132} textAnchor="middle" className="fill-[var(--v2-muted)] text-[10px] uppercase tracking-[0.15em]">
            Fulfillment
          </text>

          <Node x={40} y={250} w={150} h={56} label="Merchant" sub="Open-market shop" fill="var(--v2-green-soft)" stroke="var(--v2-green)" />
          <Node x={230} y={250} w={150} h={56} label="Payment rail" sub="PAPSS verify" />
          <Arrow d="M 190 278 L 228 278" />
          <Arrow d="M 380 278 L 318 214" />
          <Arrow d="M 520 214 L 600 278" />

          <Node x={600} y={250} w={150} h={56} label="Distributor" sub="VWL · 95% payout" fill="var(--v2-green-soft)" stroke="var(--v2-green)" />
          <Node x={730} y={250} w={150} h={56} label="Fulfillment" sub="Allocate · pack · dispatch" />

          <Arrow d="M 750 278 L 730 278" />

          {/* Split annotation */}
          <rect x={350} y={248} width={220} height={60} rx={6} fill="white" stroke="var(--v2-gold)" strokeWidth={1.5} />
          <text x={460} y={272} textAnchor="middle" className="fill-[var(--v2-ink)] text-[11px] font-semibold">
            Programmatic split
          </text>
          <text x={460} y={292} textAnchor="middle" className="fill-[var(--v2-green)] text-[10px] font-semibold">
            95% distributor · 5% platform
          </text>

          {/* Logistics optional */}
          <text x={460} y={340} textAnchor="middle" className="fill-[var(--v2-muted)] text-[10px] uppercase tracking-[0.15em]">
            Partner lane · optional
          </text>
          <Node x={600} y={352} w={150} h={48} label="Logistics partner" sub="Licensed carrier" dashed fill="var(--v2-paper)" />
          <path
            d="M 675 306 L 675 350 M 120 306 L 120 380 L 598 380"
            fill="none"
            stroke="var(--v2-muted)"
            strokeWidth={1.5}
            strokeDasharray="5 4"
            markerEnd="url(#arrowhead)"
          />

          {/* Affiliate growth */}
          <Node x={40} y={352} w={150} h={48} label="Affiliate" sub="Referrer · platform-paid" dashed fill="var(--v2-paper)" />
          <path d="M 115 306 L 115 350" fill="none" stroke="var(--v2-muted)" strokeWidth={1.5} strokeDasharray="5 4" />

          {/* Markets annotation */}
          <rect x={40} y={440} width={840} height={88} rx={8} fill="var(--v2-paper-deep)" stroke="var(--v2-line)" strokeWidth={1} />
          <text x={460} y={468} textAnchor="middle" className="fill-[var(--v2-ink)] text-[12px] font-semibold">
            Open markets = geographic demand clusters
          </text>
          <text x={460} y={488} textAnchor="middle" className="fill-[var(--v2-muted)] text-[10px]">
            Lagos Island · Kariakoo · Kejetia · Merkato · … — where shops sit, not who fulfills
          </text>
          <text x={460} y={510} textAnchor="middle" className="fill-[var(--v2-green)] text-[10px] font-medium">
            Orders attach to distributors · markets never hold the virtual warehouse ledger
          </text>
        </svg>
      </div>
      <figcaption className={`mt-4 text-sm leading-relaxed text-[var(--v2-muted)] ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
        The infrastructure layer merchants feel as verified payment and settlement — not a consumer
        marketplace. Upstream manufacturers consume aggregated signals; logistics partners operate
        delivery on opt-in trade lanes.
      </figcaption>
    </figure>
  );
}
