import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luiz Barbosa',
  description: '[Portfolio description]',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
