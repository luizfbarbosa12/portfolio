import { Container } from '@/components/ui/Container';
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
              Professional with 6 years of experience in Frontend development using ReactJS, React
              Native and NextJS, working with tools such as Context API, React Query, TypeScript,
              Cypress and Jest. Solid experience building responsive, high-precision layouts with
              Sass, TailwindCSS and CSS-in-JS. I have worked with Design Systems, Storybook, Chakra
              UI, Material UI and several other libraries. I founded my own company two years ago
              and I also bring 1 year of corporate experience as a Product Designer, with a strong
              focus on UX/UI design.
            </p>
          </div>
          <div>
            <h3>Education &amp; languages</h3>
            <p>
              Bachelor&apos;s Degree in Software Engineering at Uninter, started February 2024 and
              currently in progress.
            </p>
            <ul className={styles.languages} aria-label="Languages">
              <li>Portuguese (native)</li>
              <li>English (fluent)</li>
              <li>French (intermediate)</li>
              <li>Spanish (intermediate)</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
