import type { ReactNode } from 'react';

import { bodyFont, handwrittenFont, labelFont } from '@/styles/fonts';

interface RootBodyProps {
  children: ReactNode;
}

const fontVariables = [bodyFont.variable, labelFont.variable, handwrittenFont.variable].join(' ');

export function RootBody({ children }: RootBodyProps) {
  return <body className={fontVariables}>{children}</body>;
}
