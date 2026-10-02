import Link from 'next/link';

import { BrandLogo } from '@/components/layout/BrandLogo';
import { Container } from '@/components/ui/Container';

import styles from './Header.module.css';

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#lab', label: 'Lab' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Luiz Barbosa, home">
          <BrandLogo />
        </Link>
        <nav aria-label="Primary navigation">
          <ul className={styles.navigation}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
