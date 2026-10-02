import type { ComponentType } from 'react';

import IaParaProjetosCulturais from '@/content/work/ia-para-projetos-culturais.mdx';
import ThisPortfolio from '@/content/work/this-portfolio.mdx';

export interface CaseStudy {
  slug: string;
  title: string;
  role: string;
  stack: string;
  year: string;
  status: string;
  heroLabel: string;
  heroHref?: string;
  Content: ComponentType;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: 'ia-para-projetos-culturais',
    title: 'IA para Projetos Culturais',
    role: 'Product design and development',
    stack: 'React, TypeScript, Vite, Tailwind CSS, Radix UI, MUI',
    year: 'Ongoing',
    status: 'In development',
    heroLabel: 'View the source and current implementation on GitHub',
    heroHref: 'https://github.com/luizfbarbosa12/ProjetosCulturaisAI',
    Content: IaParaProjetosCulturais,
  },
  {
    slug: 'this-portfolio',
    title: 'This portfolio',
    role: '[Design and frontend]',
    stack: 'Next.js, TypeScript, [others]',
    year: '[Year]',
    status: '[In progress or live]',
    heroLabel: '[Hero video: the portfolio in use]',
    Content: ThisPortfolio,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
