import { Container } from '@/components/ui/Container';
import { HandNote } from '@/components/ui/HandNote';
import { Section } from '@/components/ui/Section';

import styles from './About.module.css';

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <h2 className={styles.title} id="about-title">
          About
        </h2>
        <div className={styles.columns}>
          <div>
            <h3>At the keyboard</h3>
            <p>
              [About six years of React, frontend and product design. Where you work now and what
              you own there, in your words.]
            </p>
            <p>
              [What you care about in an interface: timing, accessibility, the details that make it
              feel finished.]
            </p>
          </div>
          <div>
            <h3>Off the clock</h3>
            <p>
              [A short line about being a singer, composer and cultural producer, and how it shapes
              the way you build.]
            </p>
            <p>[Listen on Spotify]</p>
            <HandNote>[a handwritten aside]</HandNote>
          </div>
        </div>
      </Container>
    </Section>
  );
}
