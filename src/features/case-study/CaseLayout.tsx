import Image, { type StaticImageData } from 'next/image';

import bouquet from '@/app/elements/Buquê Azul claro.svg';
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
        <Image
          className={styles.ornament}
          src={bouquet as StaticImageData}
          alt=""
          width={413}
          height={578}
          aria-hidden
          priority
        />
        <Container>
          <p className={styles.eyebrow}>Case study {study.number}</p>
          <h1>{study.title}</h1>
          <dl className={styles.metadata}>
            {metadataLabels.map((label, index) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{metadataValues[index]}</dd>
              </div>
            ))}
          </dl>
          {study.media.kind === 'image' ? (
            <a
              className={styles['hero-media']}
              href={study.media.href}
              aria-label="View the source and current implementation on GitHub"
            >
              <Image
                src={study.media.src}
                alt={study.media.alt}
                width={1894}
                height={948}
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </a>
          ) : (
            <div className={styles['hero-media']}>
              <video aria-label={study.media.label} controls playsInline preload="none">
                <source src={study.media.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          )}
        </Container>
      </div>
      <Content />
    </main>
  );
}
