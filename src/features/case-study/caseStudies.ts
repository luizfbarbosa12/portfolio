import type { StaticImageData } from 'next/image';
import type { ComponentType } from 'react';

import IaParaProjetosCulturais from '@/content/work/ia-para-projetos-culturais.mdx';
import InstitutoBeja2024 from '@/content/work/instituto-beja-2024.mdx';
import culturalProjectsScreenshot from '@/imgs/Screenshot 2026-10-02 175926.png';

type CaseMedia =
  | { alt: string; href: string; kind: 'image'; src: StaticImageData }
  | { label: string; kind: 'video'; src: string };

export interface CaseStudy {
  number: string;
  slug: string;
  title: string;
  role: string;
  stack: string;
  year: string;
  status: string;
  media: CaseMedia;
  Content: ComponentType;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    number: '01',
    slug: 'ia-para-projetos-culturais',
    title: 'IA para Projetos Culturais',
    role: 'Product design and development',
    stack: 'React, TypeScript, Vite, Tailwind CSS, Radix UI, MUI',
    year: 'Ongoing',
    status: 'In development',
    media: {
      kind: 'image',
      src: culturalProjectsScreenshot,
      alt: 'Cultural project workspace showing evaluation criteria, score analysis and budget progress',
      href: 'https://github.com/luizfbarbosa12/ProjetosCulturaisAI',
    },
    Content: IaParaProjetosCulturais,
  },
  {
    number: '02',
    slug: 'instituto-beja-2024',
    title: 'Instituto Beja 2024',
    role: 'Frontend development',
    stack: 'React, Vite, GSAP, Lenis, Motion, i18next',
    year: '2024 report',
    status: 'Live',
    media: {
      kind: 'video',
      src: '/work/instituto-beja-2024.mp4',
      label: 'Preview of the Instituto Beja 2024 digital annual report',
    },
    Content: InstitutoBeja2024,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
