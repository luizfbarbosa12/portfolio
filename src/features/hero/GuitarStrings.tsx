'use client';

import type { MouseEvent, PointerEvent } from 'react';

import styles from './Hero.module.css';

const strings = [
  { id: 'low-e', label: 'Low E' },
  { id: 'a', label: 'A' },
  { id: 'd', label: 'D' },
  { id: 'g', label: 'G' },
  { id: 'b', label: 'B' },
  { id: 'high-e', label: 'High E' },
] as const;

const vibration = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-7px)' },
  { transform: 'translateY(5px)' },
  { transform: 'translateY(-3px)' },
  { transform: 'translateY(0)' },
];

function pluck(string: HTMLButtonElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  string.getAnimations().forEach((animation) => {
    animation.cancel();
  });
  string.animate(vibration, { duration: 420, easing: 'ease-out' });
}

function handleClick(event: MouseEvent<HTMLButtonElement>) {
  pluck(event.currentTarget);
}

function handlePointerEnter(event: PointerEvent<HTMLButtonElement>) {
  if (event.pointerType !== 'touch') pluck(event.currentTarget);
}

interface GuitarStringsProps {
  interactive: boolean;
}

export function GuitarStrings({ interactive }: GuitarStringsProps) {
  if (!interactive) {
    return (
      <figure className={styles.strings} aria-label="Six guitar strings">
        {strings.map(({ id }) => (
          <span key={id} aria-hidden="true" />
        ))}
      </figure>
    );
  }

  return (
    <figure className={styles.strings} aria-label="Six guitar strings">
      {strings.map(({ id, label }) => (
        <button
          className={styles.string}
          key={id}
          type="button"
          aria-label={`Pluck ${label} string`}
          onClick={handleClick}
          onPointerEnter={handlePointerEnter}
        />
      ))}
    </figure>
  );
}
