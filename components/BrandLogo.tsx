type Props = {
  variant?: 'header' | 'footer';
  theme?: 'dark' | 'light';
  priority?: boolean;
  className?: string;
};

/** logo.png — 909 × 274 lockup with Africa baked in */
const LOGO_ASPECT = 909 / 274;

const HEIGHT_CLASS = {
  header: 'h-11 sm:h-[3.25rem]',
  footer: 'h-14 sm:h-16',
} as const;

export function BrandLogo({ variant = 'header', theme = 'dark', className = '' }: Props) {
  const isHeader = variant === 'header';
  const heightClass = isHeader ? HEIGHT_CLASS.header : HEIGHT_CLASS.footer;
  const displayHeight = isHeader ? 44 : 56;
  const width = Math.round(displayHeight * LOGO_ASPECT);
  const src = theme === 'light' ? '/logo.png' : '/logo-dark.png';

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="OpenMarket Africa"
      width={width}
      height={displayHeight}
      decoding="async"
      fetchPriority={isHeader ? 'high' : 'auto'}
      className={`block shrink-0 object-contain object-left leading-none ${heightClass} ${className}`}
    />
  );
}
