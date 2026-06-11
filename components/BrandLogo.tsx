import Image from 'next/image';

type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

export function BrandLogo({ variant = 'header', priority = false, className = '' }: Props) {
  const isHeader = variant === 'header';

  return (
    <Image
      src="/logo.png"
      alt="OpenMarket Africa"
      width={isHeader ? 720 : 640}
      height={isHeader ? 200 : 180}
      priority={priority}
      className={`block w-auto max-w-full object-contain object-left ${
        isHeader ? 'h-12 sm:h-14' : 'h-16'
      } ${className}`}
    />
  );
}
