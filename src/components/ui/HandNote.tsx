import type { ComponentPropsWithoutRef } from 'react';

import { siteConfig } from '@/config/site';

import styles from './HandNote.module.css';

export function HandNote(props: ComponentPropsWithoutRef<'p'>) {
  if (!siteConfig.notes.enabled) return null;
  return <p className={styles.note} {...props} />;
}
