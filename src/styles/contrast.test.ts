import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import postcss from 'postcss';
import { describe, expect, it } from 'vitest';

const pairings = [
  ['paper', 'sea'],
  ['teardrop', 'sea'],
  ['graphite', 'paper'],
  ['sea', 'paper'],
  ['paper', 'wine'],
  ['paper', 'rose'],
  ['rose', 'paper'],
] as const;

function toLinear(channel: number) {
  const normalized = channel / 255;
  return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string) {
  const channels = [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)].map((channel) =>
    Number.parseInt(channel, 16),
  );
  const [red = 0, green = 0, blue = 0] = channels.map(toLinear);
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(first: string, second: string) {
  const brightest = Math.max(luminance(first), luminance(second));
  const darkest = Math.min(luminance(first), luminance(second));
  return (brightest + 0.05) / (darkest + 0.05);
}

async function readColorTokens() {
  const css = await readFile(join(process.cwd(), 'src/styles/tokens.css'), 'utf8');
  const colors = new Map<string, string>();

  postcss.parse(css).walkDecls(/^--color-[a-z]+$/, (declaration) => {
    if (declaration.value.startsWith('#')) colors.set(declaration.prop.slice(8), declaration.value);
  });

  return colors;
}

describe('brand color contrast', async () => {
  const colors = await readColorTokens();

  it.each(pairings)('%s on %s meets WCAG AA for text', (foreground, background) => {
    const foregroundColor = colors.get(foreground);
    const backgroundColor = colors.get(background);

    expect(foregroundColor, `Missing --color-${foreground}`).toBeDefined();
    expect(backgroundColor, `Missing --color-${background}`).toBeDefined();
    expect(contrastRatio(foregroundColor ?? '', backgroundColor ?? '')).toBeGreaterThanOrEqual(4.5);
  });
});
