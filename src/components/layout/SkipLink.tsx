import styles from './SkipLink.module.css';

export function SkipLink() {
  return (
    <a className={styles.link} href="#main-content">
      Skip to content
    </a>
  );
}
