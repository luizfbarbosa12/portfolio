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
  note: string;
}

export function CaseSummary({ children }: ChildrenProps) {
  return (
    <div className={styles.summaryBand}>
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
      <Container className={styles.detailGrid}>
        <div>
          <p className={styles.detailLabel}>Interaction detail</p>
          <h2>{title}</h2>
          {children}
        </div>
        <div className={styles.codePlaceholder}>{code}</div>
      </Container>
    </div>
  );
}

export function CaseOutcome({ children, nextSlug, note }: CaseOutcomeProps) {
  return (
    <div className={styles.outcome}>
      <Container>
        <div className={styles.outcomeCopy}>
          <h2>What changed</h2>
          {children}
          <HandNote>{note}</HandNote>
        </div>
        <nav className={styles.caseNavigation} aria-label="Case study navigation">
          <Link href="/#work">Back to all work</Link>
          <Link href={`/work/${nextSlug}`}>Next project</Link>
        </nav>
      </Container>
    </div>
  );
}
