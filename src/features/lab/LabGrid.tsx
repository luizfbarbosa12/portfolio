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
    status: 'Repository',
    title: 'Signal / Form',
    href: 'https://github.com/luizfbarbosa12/testing-webgpu',
    description:
      'An audio-reactive TypeScript visualizer with Web Audio frequency bands, custom GLSL, WebGPU feature detection and a WebGL fallback.',
  },
  {
    status: 'Live experiment',
    title: 'Flowerfields',
    href: 'https://flowerfields1205.web.app',
    description:
      'A React and Canvas 2D study with deterministic flowers, Motion-driven sampling, reduced-motion support and tested rendering.',
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
              <h3>
                {'href' in experiment ? (
                  <a href={experiment.href} target="_blank" rel="noreferrer">
                    {experiment.title}
                  </a>
                ) : (
                  experiment.title
                )}
              </h3>
              <p>{experiment.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
