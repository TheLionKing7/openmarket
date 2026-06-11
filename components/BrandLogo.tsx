import Image from 'next/image';

type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

const AFRICA = 'Africa'.split('');

export function BrandLogo({ variant = 'header', priority = false, className = '' }: Props) {
  const isHeader = variant === 'header';

  const imageClass = isHeader ? 'h-[52px] w-auto sm:h-[60px]' : 'h-[72px] w-auto';

  const africaTextClass = isHeader
    ? 'text-[0.5rem] sm:text-[0.5625rem]'
    : 'text-[0.625rem]';

  return (
    <div className={`relative inline-block max-w-full pb-3 sm:pb-3.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="OpenMarket Africa"
        width={isHeader ? 525 : 450}
        height={isHeader ? 135 : 120}
        priority={priority}
        className={`block max-w-full ${imageClass}`}
      />
      {/* Under MARKET — gold wordmark on the right */}
      <div
        className={`absolute left-[58%] top-full mt-px flex w-[36%] justify-between font-sans font-bold uppercase leading-none text-white ${africaTextClass}`}
        aria-label="Africa"
      >
        {AFRICA.map((letter, index) => (
          <span key={`${letter}-${index}`} aria-hidden>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
