import type { StaticImageData } from 'next/image';

import culturalProjectsScreenshot from '@/imgs/Screenshot 2026-10-02 175926.png';

type ProjectMedia =
  | { alt: string; kind: 'image'; src: StaticImageData }
  | { label: string; kind: 'video'; src: string };

export interface ProjectSummary {
  number: string;
  slug: string;
  title: string;
  description: string;
  stack: readonly string[];
  media: ProjectMedia;
}

export const projects: readonly ProjectSummary[] = [
  {
    number: '01',
    slug: 'ia-para-projetos-culturais',
    title: 'IA para Projetos Culturais',
    description:
      'A structured workspace that helps cultural producers write and manage proposals for Brazilian funding calls.',
    stack: ['React', 'TypeScript', 'Product design'],
    media: {
      kind: 'image',
      src: culturalProjectsScreenshot,
      alt: 'Cultural project workspace showing evaluation criteria, score analysis and budget progress',
    },
  },
  {
    number: '02',
    slug: 'instituto-beja-2024',
    title: 'Instituto Beja 2024',
    description:
      'A bilingual digital annual report that turns the institute’s work, partnerships and impact into an editorial web experience.',
    stack: ['React', 'GSAP', 'i18next'],
    media: {
      kind: 'video',
      src: '/work/instituto-beja-2024.mp4',
      label: 'Preview of the Instituto Beja 2024 digital annual report',
    },
  },
];

export const liveClientWork = [
  { title: 'Twila products', href: 'https://www.twila.com.br/produtos' },
  { title: 'Credicarro', href: 'https://www.credicarro.com.br/' },
  { title: 'Parcele Mais', href: 'https://www.parcelemais.com.br/' },
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
