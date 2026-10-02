import '@/styles/tokens.css';
import '@/styles/reset.css';
import '@/styles/globals.css';
import 'lenis/dist/lenis.css';

import type { Metadata } from 'next';

import { RootBody } from '@/components/layout/RootBody';
import { ThemeScript } from '@/components/layout/ThemeScript';
import { siteConfig } from '@/config/site';
import { fontVariables } from '@/styles/fonts';

const description =
  'Professional with 6 years of experience in Frontend development using ReactJS, React Native and NextJS, working with tools such as Context API, React Query, TypeScript, Cypress and Jest.';

export const metadata: Metadata = {
  title: siteConfig.identity.name,
  description,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.identity.name,
  jobTitle: siteConfig.identity.title,
  email: siteConfig.identity.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Joinville',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  sameAs: [siteConfig.identity.linkedin, siteConfig.identity.github],
  knowsLanguage: ['Portuguese', 'English', 'French', 'Spanish'],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={siteConfig.locale}
      className={fontVariables}
      data-theme={siteConfig.theme.default}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replaceAll('<', '\\u003c'),
          }}
        />
      </head>
      <RootBody>{children}</RootBody>
    </html>
  );
}
