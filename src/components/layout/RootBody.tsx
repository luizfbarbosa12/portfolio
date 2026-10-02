import type { ReactNode } from 'react';

import { ExperienceEnhancements } from '@/components/layout/ExperienceEnhancements';

interface RootBodyProps {
  children: ReactNode;
}

export function RootBody({ children }: RootBodyProps) {
  return (
    <body suppressHydrationWarning>
      <ExperienceEnhancements />
      {children}
    </body>
  );
}
