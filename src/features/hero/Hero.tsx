import Image, { type StaticImageData } from 'next/image';

import bouquet from '@/app/elements/Buquê Azul claro.svg';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

import { GuitarStrings } from './GuitarStrings';
import styles from './Hero.module.css';

const stack = ['React', 'TypeScript', 'Next.js', 'Motion', 'GSAP', 'Product design'] as const;

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image
        className={styles.bouquet}
        src={bouquet as StaticImageData}
        alt=""
        width={413}
        height={578}
        aria-hidden
      />
      <Container>
        <div className={styles.intro}>
          <p className={styles.location}>
            {siteConfig.identity.title} in {siteConfig.identity.location}
          </p>
          <p className={styles.status}>Open to work</p>
        </div>
        <h1 className={styles.title} id="hero-title">
          Luiz <span>Barbosa</span>
        </h1>
        <div className={styles.summary}>
          <p>I build expressive, accessible digital products where design and engineering meet.</p>
          {siteConfig.notes.enabled ? <p className={styles.note}>pluck the strings</p> : null}
        </div>
        <GuitarStrings interactive={siteConfig.motion.strings} />
        <ul className={styles.stack} aria-label="Core skills">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
