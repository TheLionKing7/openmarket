'use client';

type Band = {
  left: string;
  width: string;
  top: string;
  fontSize: string;
};

export function AfricaLockup({ band }: { band: Band }) {
  return (
    <div
      className="pointer-events-none absolute flex justify-center"
      style={{
        left: band.left,
        width: band.width,
        top: band.top,
      }}
      aria-hidden
    >
      <span
        className="whitespace-nowrap font-sans font-bold uppercase leading-none"
        style={{
          fontSize: band.fontSize,
          color: '#FFFFFF',
          letterSpacing: 'normal',
        }}
      >
        Africa
      </span>
    </div>
  );
}
