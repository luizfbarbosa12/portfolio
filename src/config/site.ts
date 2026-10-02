export type Theme = 'dark' | 'light';
export type LabelFont = 'body' | 'jetbrains-mono' | 'geist-mono';

interface SiteConfig {
  locale: 'en';
  identity: {
    name: string;
    title: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
  };
  theme: {
    default: Theme;
    allowToggle: boolean;
  };
  labels: {
    font: LabelFont;
  };
  notes: {
    enabled: boolean;
  };
  motion: {
    strings: boolean;
  };
  fonts: {
    aujournuitWebEmbeddingLicensed: boolean;
    adobeKitId: string | null;
  };
}

export const siteConfig: SiteConfig = {
  locale: 'en',
  identity: {
    name: 'Luiz Barbosa',
    title: 'Frontend Developer',
    location: 'Joinville, SC, Brazil',
    email: 'l.nandoferbarbosa@gmail.com',
    github: 'https://github.com/luizfbarbosa12',
    linkedin: 'https://www.linkedin.com/in/luizfbarbosa/',
  },
  theme: {
    // Approved default. Change this value only with a matching token preview check.
    default: 'dark',
    allowToggle: false,
  },
  labels: {
    // Approved options: body, jetbrains-mono or geist-mono.
    font: 'jetbrains-mono',
  },
  notes: {
    enabled: true,
  },
  motion: {
    strings: true,
  },
  fonts: {
    aujournuitWebEmbeddingLicensed: true,
    adobeKitId: null,
  },
};
