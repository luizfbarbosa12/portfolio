import localFont from 'next/font/local';

export const displayFont = localFont({
  src: '../../public/fonts/Aujournuit-VariableVF.ttf',
  display: 'swap',
  variable: '--font-aujournuit',
  weight: '100 900',
});

export const bodyFont = localFont({
  src: [
    {
      path: '../../public/fonts/Aquavit Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Aquavit Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-aquavit',
});

export const handwrittenFont = localFont({
  src: '../../public/fonts/Da Vinci.otf',
  display: 'swap',
  variable: '--font-da-vinci',
  weight: '400',
});

export const fontVariables = [
  bodyFont.variable,
  displayFont.variable,
  handwrittenFont.variable,
].join(' ');
