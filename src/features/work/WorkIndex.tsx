import Link from 'next/link';

import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

import { projects } from './projects';
import styles from './WorkIndex.module.css';

export function WorkIndex() {
  return (
    <Section id="work" aria-labelledby="work-title">
      <Container>
        <div className={styles.heading}>
          <h2 id="work-title">Selected work</h2>
          <p>{projects.length} projects</p>
        </div>
        <ol className={styles.list}>
          {projects.map((project) => (
            <li className={styles.project} key={project.slug}>
              <div className={styles.copy}>
                <p className={styles.number}>{project.number}</p>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.stack} aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
                <Link href={`/work/${project.slug}`}>Read the case study</Link>
              </div>
              <div className={styles.media} role="img" aria-label={project.mediaLabel}>
                <span>{project.mediaLabel}</span>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
