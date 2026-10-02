import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id="contact" variant="wine" aria-labelledby="contact-title">
      <Container>
        <h2 className={styles.title} id="contact-title">
          Let&apos;s talk
        </h2>
        <a className={styles.email} href="mailto:l.nandoferbarbosa@gmail.com">
          l.nandoferbarbosa@gmail.com
        </a>
        <footer className={styles.footer}>
          <p>[GitHub] &nbsp; [LinkedIn] &nbsp; Spotify</p>
          <p>Designed and built by Luiz Barbosa</p>
        </footer>
      </Container>
    </Section>
  );
}
