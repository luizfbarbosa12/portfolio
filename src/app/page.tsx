import { Header } from '@/components/layout/Header';
import { SkipLink } from '@/components/layout/SkipLink';
import { About } from '@/features/about/About';
import { Contact } from '@/features/contact/Contact';
import { Hero } from '@/features/hero/Hero';
import { LabGrid } from '@/features/lab/LabGrid';
import { WorkIndex } from '@/features/work/WorkIndex';

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <WorkIndex />
        <LabGrid />
        <About />
        <Contact />
      </main>
    </>
  );
}
