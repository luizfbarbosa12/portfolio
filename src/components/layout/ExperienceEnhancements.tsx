'use client';

import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

import styles from './ExperienceEnhancements.module.css';

export function ExperienceEnhancements() {
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      autoToggle: true,
      lerp: 0.14,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const ring = cursorRingRef.current;
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

    const moveRing = (event: PointerEvent) => {
      ring?.style.setProperty('--cursor-x', `${String(event.clientX)}px`);
      ring?.style.setProperty('--cursor-y', `${String(event.clientY)}px`);
      ring?.setAttribute('data-visible', 'true');
    };

    const hideRing = () => ring?.removeAttribute('data-visible');

    if (finePointer.matches) {
      addEventListener('pointermove', moveRing, { passive: true });
      document.documentElement.addEventListener('mouseleave', hideRing);
    }

    return () => {
      lenis.destroy();
      removeEventListener('pointermove', moveRing);
      document.documentElement.removeEventListener('mouseleave', hideRing);
    };
  }, []);

  return <div ref={cursorRingRef} className={styles.ring} aria-hidden="true" />;
}
