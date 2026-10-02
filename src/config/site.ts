export type Theme = 'dark' | 'light';

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
  notes: {
    enabled: boolean;
  };
  motion: {
    strings: boolean;
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
  notes: {
    enabled: true,
  },
  motion: {
    strings: true,
  },
};
