import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

import styles from './Hero.module.css';

const stack = ['React', 'TypeScript', 'Next.js', 'Motion', 'GSAP', 'Product design'] as const;

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.intro}>
          <p className={styles.location}>Frontend engineer in Joinville, Brazil</p>
          <p className={styles.status}>Open to work</p>
        </div>
        <h1 className={styles.title} id="hero-title">
          Luiz <span>Barbosa</span>
        </h1>
        <div className={styles.summary}>
          <p>[One line on what you build]</p>
          {siteConfig.notes.enabled ? <p className={styles.note}>pluck the strings</p> : null}
        </div>
        <figure className={styles.strings} aria-label="Six guitar strings">
          {['low-e', 'a', 'd', 'g', 'b', 'high-e'].map((string) => (
            <span key={string} aria-hidden="true" />
          ))}
        </figure>
        <ul className={styles.stack} aria-label="Core skills">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
