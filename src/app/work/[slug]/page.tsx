import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SkipLink } from '@/components/layout/SkipLink';
import { CaseHeader } from '@/features/case-study/CaseHeader';
import { CaseLayout } from '@/features/case-study/CaseLayout';
import { caseStudies, getCaseStudy } from '@/features/case-study/caseStudies';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return { title: study ? `${study.title} | Luiz Barbosa` : 'Work | Luiz Barbosa' };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <>
      <SkipLink />
      <CaseHeader />
      <CaseLayout study={study} />
    </>
  );
}
