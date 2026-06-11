'use client';

import { type RefObject, useLayoutEffect, useRef, useState } from 'react';

type Layout = {
  left: string;
  width: string;
  top: string;
  fontSize: string;
};

type Props = {
  layout: Layout;
  anchorRef: RefObject<HTMLDivElement | null>;
  ready: boolean;
};

const AFRICA_LETTERS = 6;

export function AfricaLockup({ layout, anchorRef, ready }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [letterSpacing, setLetterSpacing] = useState('0px');

  useLayoutEffect(() => {
    if (!ready) return;

    function fit() {
      const box = boxRef.current;
      const text = textRef.current;
      if (!box || !text) return;

      text.style.letterSpacing = '0px';
      const natural = text.getBoundingClientRect().width;
      const target = box.getBoundingClientRect().width;
      if (natural > 0 && target > 0) {
        const extra = target - natural;
        const spacing = extra / (AFRICA_LETTERS - 1);
        setLetterSpacing(`${spacing}px`);
      }
    }

    fit();
    const observer = new ResizeObserver(fit);
    const anchor = anchorRef.current;
    if (anchor) observer.observe(anchor);
    if (boxRef.current) observer.observe(boxRef.current);
    window.addEventListener('resize', fit);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [layout, ready, anchorRef]);

  return (
    <div
      ref={boxRef}
      className="pointer-events-none absolute overflow-hidden"
      style={{
        left: layout.left,
        width: layout.width,
        top: layout.top,
      }}
      aria-hidden
    >
      <span
        ref={textRef}
        className="inline-block whitespace-nowrap font-sans font-bold uppercase leading-none"
        style={{
          fontSize: layout.fontSize,
          color: '#FFFFFF',
          letterSpacing,
        }}
      >
        Africa
      </span>
    </div>
  );
}
