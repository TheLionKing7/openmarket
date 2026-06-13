type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

/** logo.svg viewBox 681.75 × 205.5 — full lockup with Africa baked in */
const LOGO_ASPECT = 681.75 / 205.5;

export function BrandLogo({ variant = 'header', className = '' }: Props) {
  const isHeader = variant === 'header';
  const height = isHeader ? 44 : 56;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="OpenMarket Africa"
      width={Math.round(height * LOGO_ASPECT)}
      height={height}
      decoding="async"
      fetchPriority={isHeader ? 'high' : 'auto'}
      className={`block w-auto max-w-full object-contain object-left leading-none ${
        isHeader ? 'h-11 sm:h-[3.25rem]' : 'h-14 sm:h-16'
      } ${className}`}
    />
  );
}
