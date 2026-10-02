import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { HandNote } from '@/components/ui/HandNote';

import styles from './CaseLayout.module.css';
import { type CaseStudy, getNextProject } from './caseStudies';

interface CaseLayoutProps {
  study: CaseStudy;
}

const metadataLabels = ['Role', 'Stack', 'Year', 'Status'] as const;

export function CaseLayout({ study }: CaseLayoutProps) {
  const metadataValues = [study.role, study.stack, study.year, study.status];
  const nextProject = getNextProject(study.slug);

  return (
    <main id="main-content">
      <div className={styles.intro}>
        <Container>
          <p className={styles.eyebrow}>Case study 01</p>
          <h1>{study.title}</h1>
          <dl className={styles.metadata}>
            {metadataLabels.map((label, index) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{metadataValues[index]}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.heroMedia} role="img" aria-label={study.heroLabel}>
            {study.heroLabel}
          </div>
          <div className={styles.summary}>
            <div>
              <h2>The problem</h2>
              <p>{study.problem}</p>
            </div>
            <div>
              <h2>What I built</h2>
              <p>{study.built}</p>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.detail}>
        <Container className={styles.detailGrid}>
          <div>
            <p className={styles.detailLabel}>Interaction detail</p>
            <h2>{study.detailTitle}</h2>
            <p>{study.detailDescription}</p>
          </div>
          <div className={styles.codePlaceholder}>[Embedded live component or code excerpt]</div>
        </Container>
      </div>

      <div className={styles.outcome}>
        <Container>
          <div className={styles.outcomeCopy}>
            <h2>What changed</h2>
            <p>{study.changed}</p>
            <HandNote>{study.note}</HandNote>
          </div>
          <nav className={styles.caseNavigation} aria-label="Case study navigation">
            <Link href="/#work">Back to all work</Link>
            {nextProject ? <Link href={`/work/${nextProject.slug}`}>Next project</Link> : null}
          </nav>
        </Container>
      </div>
    </main>
  );
}
