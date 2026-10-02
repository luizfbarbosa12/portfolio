import type { ComponentPropsWithoutRef } from 'react';

import styles from './Chip.module.css';

export function Chip(props: ComponentPropsWithoutRef<'span'>) {
  return <span className={styles.chip} {...props} />;
}
