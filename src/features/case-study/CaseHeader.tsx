import Link from 'next/link';

import { BrandLogo } from '@/components/layout/BrandLogo';
import { Container } from '@/components/ui/Container';

import styles from './CaseHeader.module.css';

export function CaseHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Luiz Barbosa, home">
          <BrandLogo />
        </Link>
        <Link href="/#work">Back to work</Link>
      </Container>
    </header>
  );
}
