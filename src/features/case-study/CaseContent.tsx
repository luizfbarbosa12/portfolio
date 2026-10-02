import Link from 'next/link';
import type { ReactNode } from 'react';

import { Container } from '@/components/ui/Container';
import { HandNote } from '@/components/ui/HandNote';

import styles from './CaseLayout.module.css';

interface ChildrenProps {
  children: ReactNode;
}

interface CaseSummaryItemProps extends ChildrenProps {
  title: string;
}

interface CaseDetailProps extends ChildrenProps {
  code: string;
  title: string;
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

export function CaseDetail({ children, code, title }: CaseDetailProps) {
  return (
    <div className={styles.detail}>
      <Container className={styles['detail-grid']}>
        <div>
          <p className={styles['detail-label']}>Interaction detail</p>
          <h2>{title}</h2>
          {children}
        </div>
        <div className={styles['code-placeholder']}>{code}</div>
      </Container>
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
