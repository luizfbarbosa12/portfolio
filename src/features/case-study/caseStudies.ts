import { projects } from '@/features/work/projects';

export interface CaseStudy {
  slug: string;
  title: string;
  role: string;
  stack: string;
  year: string;
  status: string;
  heroLabel: string;
  problem: string;
  built: string;
  detailTitle: string;
  detailDescription: string;
  changed: string;
  note: string;
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
    problem:
      '[Why writing a funding proposal is hard for artists, from your own experience as a producer.]',
    built:
      '[The core flow, the decisions behind it, and what you would show a hiring engineer first.]',
    detailTitle: '[One detail worth zooming into]',
    detailDescription:
      '[A component, an animation or an accessibility fix, with the reasoning and a short code excerpt.]',
    changed:
      '[Results you can stand behind, with period and source. Leave out any number you cannot back up.]',
    note: '[a handwritten aside]',
  },
  {
    slug: 'this-portfolio',
    title: 'This portfolio',
    role: '[Design and frontend]',
    stack: 'Next.js, TypeScript, [others]',
    year: '[Year]',
    status: '[In progress or live]',
    heroLabel: '[Hero video: the portfolio in use]',
    problem: '[Why this portfolio needed to balance frontend engineering and artistic identity.]',
    built: '[How it was designed and built, from brand tokens to the string interaction.]',
    detailTitle: '[One detail worth zooming into]',
    detailDescription:
      '[A component, an animation or an accessibility fix, with the reasoning and a short code excerpt.]',
    changed:
      '[Results you can stand behind, with period and source. Leave out any number you cannot back up.]',
    note: '[a handwritten aside]',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}
