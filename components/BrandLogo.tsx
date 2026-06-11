type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

const AFRICA = 'Africa'.split('');

/** Tuned to logo.svg viewBox 681.75 × 205.5 — MARKET is the right gold wordmark */
const AFRICA_LAYOUT = {
  header: { left: '54%', width: '41%', top: '66.5%', fontSize: 'clamp(6px, 0.62vw, 9px)' },
  footer: { left: '54%', width: '41%', top: '66.5%', fontSize: '10px' },
} as const;

export function BrandLogo({ variant = 'header', className = '' }: Props) {
  const isHeader = variant === 'header';
  const layout = isHeader ? AFRICA_LAYOUT.header : AFRICA_LAYOUT.footer;

  return (
    <div
      className={`relative inline-block max-w-full leading-none ${className}`}
      aria-label="OpenMarket Africa"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt=""
        aria-hidden
        width={isHeader ? 280 : 320}
        height={isHeader ? 72 : 88}
        decoding="async"
        fetchPriority={isHeader ? 'high' : 'auto'}
        className={`block w-auto max-w-full object-contain object-left ${
          isHeader ? 'h-11 sm:h-[3.25rem]' : 'h-14 sm:h-16'
        }`}
      />
      <div
        className="pointer-events-none absolute flex justify-between font-sans font-bold uppercase leading-none text-white"
        style={{
          left: layout.left,
          width: layout.width,
          top: layout.top,
          fontSize: layout.fontSize,
        }}
        aria-hidden
      >
        {AFRICA.map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </div>
    </div>
  );
}
