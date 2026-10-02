import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import peony from '@/app/elements/Peonia Vermelho escuro.svg';
import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

import { liveClientWork, projects } from './projects';
import styles from './WorkIndex.module.css';

function ProjectMedia({ media }: { media: (typeof projects)[number]['media'] }) {
  return (
    <div className={styles.media}>
      {media.kind === 'image' ? (
        <Image
          src={media.src}
          alt={media.alt}
          width={1894}
          height={948}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <video aria-label={media.label} autoPlay loop muted playsInline preload="auto">
          <source src={media.src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      )}
    </div>
  );
}

export function WorkIndex() {
  return (
    <Section id="work" aria-labelledby="work-title">
      <Container className={styles.container}>
        <Image
          className={styles.ornament}
          src={peony as StaticImageData}
          alt=""
          width={167}
          height={235}
          aria-hidden
        />
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
              <ProjectMedia media={project.media} />
            </li>
          ))}
        </ol>
        <div className={styles['live-work']}>
          <p>Live client work</p>
          <ul>
            {liveClientWork.map((project) => (
              <li key={project.href}>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
