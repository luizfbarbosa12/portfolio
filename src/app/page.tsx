import { siteConfig } from '@/config/site';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.preview}>
      <section className={styles.panel} data-theme="dark">
        <div className={styles.content}>
          <p className={styles.label}>Frontend engineer</p>
          <h1 className={styles.display}>Luiz Barbosa</h1>
          <p className={styles.body}>[One line on what you build]</p>
          <p className={styles.pill}>Open to work</p>
          {siteConfig.notes.enabled ? <p className={styles.note}>[A handwritten aside]</p> : null}
        </div>
      </section>

      <section className={styles.panel} data-theme="light">
        <div className={styles.content}>
          <p className={styles.label}>Selected work</p>
          <h2 className={styles['section-title']}>[Project title]</h2>
          <p className={styles.body}>[One line on the project and your role]</p>
          {siteConfig.notes.enabled ? <p className={styles.note}>[A handwritten aside]</p> : null}
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.content}>
          <p className={styles.label}>Contact</p>
          <h2 className={styles.display}>Let&apos;s talk</h2>
        </div>
      </section>
    </main>
  );
}
