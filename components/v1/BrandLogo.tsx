type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

/** logo-dark.png — 909 × 274 lockup for dark backgrounds */
const LOGO_ASPECT = 909 / 274;

export function BrandLogo({ variant = 'header', className = '' }: Props) {
  const isHeader = variant === 'header';
  const height = isHeader ? 44 : 56;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-dark.png"
      alt="OpenMarket Africa"
      width={Math.round(height * LOGO_ASPECT)}
      height={height}
      decoding="async"
      fetchPriority={isHeader ? 'high' : 'auto'}
      className={`block shrink-0 object-contain object-left leading-none ${
        isHeader ? 'h-11 sm:h-[3.25rem]' : 'h-14 sm:h-16'
      } ${className}`}
    />
  );
}
