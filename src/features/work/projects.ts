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
      'A React platform that helps artists write proposals for cultural funding calls with AI assistance. [Your one-line outcome.]',
    stack: ['React', 'Product design', 'AI'],
    mediaLabel: '[Autoplay video loop of the product in use]',
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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
