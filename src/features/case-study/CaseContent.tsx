import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Container } from '@/components/ui/Container';
import { HandNote } from '@/components/ui/HandNote';
import filesScreenshot from '@/imgs/Screenshot 2026-10-02 191430.png';
import analysisScreenshot from '@/imgs/Screenshot 2026-10-02 191456.png';
import checklistScreenshot from '@/imgs/Screenshot 2026-10-02 191523.png';

import styles from './CaseLayout.module.css';

interface ChildrenProps {
  children: ReactNode;
}

interface CaseSummaryItemProps extends ChildrenProps {
  title: string;
}

interface CaseDetailProps extends ChildrenProps {
  title: string;
  visual?: ReactNode;
}

interface CaseOutcomeProps extends ChildrenProps {
  nextSlug: string;
  note?: string;
  title?: string;
}

export function CaseSummary({ children }: ChildrenProps) {
  return (
    <div className={styles['summary-band']}>
      <Container className={styles.summary}>{children}</Container>
    </div>
  );
}

export function CaseSummaryItem({ children, title }: CaseSummaryItemProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export function CaseDetail({ children, title, visual }: CaseDetailProps) {
  return (
    <div className={styles.detail}>
      <Container className={visual ? styles['detail-grid'] : styles['detail-grid-text']}>
        <div>
          <p className={styles['detail-label']}>Interaction detail</p>
          <h2>{title}</h2>
          {children}
        </div>
        {visual}
      </Container>
    </div>
  );
}

const culturalProjectScreens = [
  {
    src: filesScreenshot,
    alt: 'Funding-call workspace showing uploaded edital files and project progress',
    caption: 'Edital files and project overview',
    width: 1909,
    height: 913,
  },
  {
    src: analysisScreenshot,
    alt: 'Score analysis view with evaluation axes and detailed progress bars',
    caption: 'Evaluation score analysis',
    width: 1888,
    height: 922,
  },
  {
    src: checklistScreenshot,
    alt: 'Funding-call checklist organized by owner, phase and completion status',
    caption: 'Requirements checklist',
    width: 1885,
    height: 931,
  },
] as const;

export function CulturalProjectsGallery() {
  return (
    <div className={styles['case-gallery']} aria-label="Cultural projects workspace screens">
      {culturalProjectScreens.map((screen) => (
        <figure key={screen.caption}>
          <a
            href={screen.src.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${screen.caption} full size`}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              sizes="(max-width: 768px) 85vw, 40vw"
            />
          </a>
        </figure>
      ))}
    </div>
  );
}

export function CaseOutcome({
  children,
  nextSlug,
  note,
  title = 'What changed',
}: CaseOutcomeProps) {
  return (
    <div className={styles.outcome}>
      <Container>
        <div className={styles['outcome-copy']}>
          <h2>{title}</h2>
          {children}
          {note ? <HandNote>{note}</HandNote> : null}
        </div>
        <nav className={styles['case-navigation']} aria-label="Case study navigation">
          <Link href="/#work">Back to all work</Link>
          <Link href={`/work/${nextSlug}`}>Next project</Link>
        </nav>
      </Container>
    </div>
  );
}
