import type { ComponentPropsWithoutRef } from 'react';

import styles from './Container.module.css';

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const classes = [styles.container, className].filter(Boolean).join(' ');
  return <div className={classes} {...props} />;
}
