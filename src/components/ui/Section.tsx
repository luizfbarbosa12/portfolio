import type { ComponentPropsWithoutRef } from 'react';

import styles from './Section.module.css';

type SectionVariant = 'base' | 'alt' | 'wine';

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  variant?: SectionVariant;
}

export function Section({ className, variant = 'base', ...props }: SectionProps) {
  const classes = [styles.section, styles[variant], className].filter(Boolean).join(' ');
  return <section className={classes} {...props} />;
}
