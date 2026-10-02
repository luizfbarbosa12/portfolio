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
  Content: ComponentType;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: 'ia-para-projetos-culturais',
    title: 'IA para Projetos Culturais',
    role: '[Design and frontend]',
    stack: 'React, [others]',
    year: '[Year]',
    status: '[In progress or live]',
    heroLabel: '[Hero video: the full flow in 20 seconds]',
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
