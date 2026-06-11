type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

export function BrandLogo({ variant = 'header', className = '' }: Props) {
  const isHeader = variant === 'header';

  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="OpenMarket Africa"
      width={isHeader ? 280 : 320}
      height={isHeader ? 72 : 88}
      decoding="async"
      fetchPriority={isHeader ? 'high' : 'auto'}
      className={`block w-auto max-w-full object-contain object-left ${
        isHeader ? 'h-11 sm:h-[3.25rem]' : 'h-14 sm:h-16'
      } ${className}`}
    />
  );
}
