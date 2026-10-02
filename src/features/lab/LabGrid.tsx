import { Container } from '@/components/ui/Container';
import { HandNote } from '@/components/ui/HandNote';
import { Section } from '@/components/ui/Section';

import styles from './LabGrid.module.css';

const experiments = [
  {
    status: 'Live on this page',
    title: 'Six strings',
    description:
      'The divider from the secondary logo, turned into a pluckable interaction with keyboard support and reduced motion.',
  },
  {
    status: '[Planned]',
    title: 'Audio-reactive canvas',
    description: '[One of your released tracks driving a canvas visual through the Web Audio API.]',
  },
  {
    status: '[Planned]',
    title: 'Shader study',
    description:
      '[A first WebGL piece, for example a paper texture that ripples under the cursor.]',
  },
] as const;

export function LabGrid() {
  return (
    <Section id="lab" variant="alt" aria-labelledby="lab-title">
      <Container>
        <div className={styles.heading}>
          <h2 id="lab-title">Lab</h2>
          <HandNote>where code meets music</HandNote>
        </div>
        <ul className={styles.grid}>
          {experiments.map((experiment) => (
            <li key={experiment.title}>
              <p className={styles.status}>{experiment.status}</p>
              <h3>{experiment.title}</h3>
              <p>{experiment.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
