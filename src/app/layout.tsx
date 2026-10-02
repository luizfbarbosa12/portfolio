import '@/styles/tokens.css';
import '@/styles/reset.css';
import '@/styles/globals.css';

import type { Metadata } from 'next';

import { RootBody } from '@/components/layout/RootBody';
import { ThemeScript } from '@/components/layout/ThemeScript';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Luiz Barbosa',
  description: '[Portfolio description]',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={siteConfig.locale}
      data-label-font={siteConfig.labels.font}
      data-theme={siteConfig.theme.default}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <RootBody>{children}</RootBody>
    </html>
  );
}
