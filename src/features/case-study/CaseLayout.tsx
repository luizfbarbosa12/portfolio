import { Container } from '@/components/ui/Container';

import styles from './CaseLayout.module.css';
import type { CaseStudy } from './caseStudies';

interface CaseLayoutProps {
  study: CaseStudy;
}

const metadataLabels = ['Role', 'Stack', 'Year', 'Status'] as const;

export function CaseLayout({ study }: CaseLayoutProps) {
  const metadataValues = [study.role, study.stack, study.year, study.status];
  const Content = study.Content;

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
        </Container>
      </div>
      <Content />
    </main>
  );
}
