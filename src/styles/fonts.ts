import { Hanken_Grotesk, JetBrains_Mono, La_Belle_Aurore } from 'next/font/google';

export const bodyFont = Hanken_Grotesk({
  display: 'swap',
  preload: false,
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  weight: ['300', '400'],
});

export const labelFont = JetBrains_Mono({
  display: 'swap',
  preload: false,
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: '400',
});

export const handwrittenFont = La_Belle_Aurore({
  display: 'swap',
  preload: false,
  subsets: ['latin'],
  variable: '--font-la-belle-aurore',
  weight: '400',
});
