export interface ProjectSummary {
  number: string;
  slug: string;
  title: string;
  description: string;
  stack: readonly string[];
  mediaLabel: string;
}

export const projects: readonly ProjectSummary[] = [
  {
    number: '01',
    slug: 'ia-para-projetos-culturais',
    title: 'IA para Projetos Culturais',
    description:
      'A structured workspace that helps cultural producers write and manage proposals for Brazilian funding calls.',
    stack: ['React', 'TypeScript', 'Product design'],
    mediaLabel: 'Funding-call workspace with sections, score analysis, budget and team management',
  },
  {
    number: '02',
    slug: 'this-portfolio',
    title: 'This portfolio',
    description: '[How it was designed and built, from brand tokens to the string interaction.]',
    stack: ['Next.js', 'GSAP', 'Design tokens'],
    mediaLabel: '[Process frames: tokens, prototype, final]',
  },
];

export const liveClientWork = [
  { title: 'Twila products', href: 'https://www.twila.com.br/produtos' },
  { title: 'Credicarro', href: 'https://www.credicarro.com.br/' },
  { title: 'Parcele Mais', href: 'https://www.parcelemais.com.br/' },
  { title: 'Relatório Beja 2024', href: 'https://relatorio2024.institutobeja.com/' },
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
