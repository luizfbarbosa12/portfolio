import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/config/site';

import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id="contact" variant="wine" aria-labelledby="contact-title">
      <Container>
        <h2 className={styles.title} id="contact-title">
          Let&apos;s talk
        </h2>
        <a className={styles.email} href={`mailto:${siteConfig.identity.email}`}>
          {siteConfig.identity.email}
        </a>
        <footer className={styles.footer}>
          <nav className={styles.socials} aria-label="Social links">
            <a href={siteConfig.identity.github}>GitHub</a>
            <a href={siteConfig.identity.linkedin}>LinkedIn</a>
          </nav>
          <p>Designed and built by Luiz Barbosa</p>
        </footer>
      </Container>
    </Section>
  );
}
