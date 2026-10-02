import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('the home has no detectable accessibility violations', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('#work')).toHaveCount(1);
  await expect(page.locator('#lab')).toHaveCount(1);
  await expect(page.locator('#about')).toHaveCount(1);
  await expect(page.locator('#contact')).toHaveCount(1);

  const strings = page.getByRole('figure', { name: 'Six guitar strings' }).getByRole('button');
  await expect(strings).toHaveCount(6);
  await strings.first().focus();
  await page.keyboard.press('Enter');
  await expect(strings.first()).toBeFocused();

  const smallestTarget = await strings.evaluateAll((buttons) =>
    Math.min(...buttons.map((button) => button.getBoundingClientRect().height)),
  );
  expect(smallestTarget).toBeGreaterThanOrEqual(44);

  const loadedFonts = await page.evaluate(
    () =>
      new Set(
        performance
          .getEntriesByType('resource')
          .filter((entry) => entry.name.endsWith('.woff2'))
          .map((entry) => entry.name),
      ).size,
  );

  expect(loadedFonts).toBeLessThanOrEqual(4);

  const results = await new AxeBuilder({ page }).analyze();

  expect(results.violations).toEqual([]);
});

test('the home exposes verified public profile and project links', async ({ page }) => {
  await page.goto('/');

  const expectedLinks = [
    ['Signal / Form', 'https://github.com/luizfbarbosa12/testing-webgpu'],
    ['Flowerfields', 'https://flowerfields1205.web.app'],
    ['Twila products', 'https://www.twila.com.br/produtos'],
    ['Credicarro', 'https://www.credicarro.com.br/'],
    ['Parcele Mais', 'https://www.parcelemais.com.br/'],
    ['Relatório Beja 2024', 'https://relatorio2024.institutobeja.com/'],
    ['GitHub', 'https://github.com/luizfbarbosa12'],
    ['LinkedIn', 'https://www.linkedin.com/in/luizfbarbosa/'],
  ] as const;

  for (const [name, href] of expectedLinks) {
    await expect(page.getByRole('link', { name })).toHaveAttribute('href', href);
  }

  await expect(page.getByText('Frontend Developer in Joinville, SC, Brazil')).toBeVisible();
  await expect(page.getByText('Spotify')).toHaveCount(0);

  const personJsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(personJsonLd).toContain('https://www.linkedin.com/in/luizfbarbosa/');
  expect(personJsonLd).toContain('https://github.com/luizfbarbosa12');
  expect(personJsonLd).not.toContain('spotify');
});

const caseStudies = [
  {
    slug: 'ia-para-projetos-culturais',
    title: 'IA para Projetos Culturais',
    nextSlug: 'this-portfolio',
  },
  {
    slug: 'this-portfolio',
    title: 'This portfolio',
    nextSlug: 'ia-para-projetos-culturais',
  },
] as const;

test('the MDX case studies have no detectable accessibility violations', async ({ page }) => {
  for (const study of caseStudies) {
    await page.goto(`/work/${study.slug}`);

    await expect(page.getByRole('heading', { level: 1, name: study.title })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'The problem' })).toBeVisible();
    if (study.slug === 'ia-para-projetos-culturais') {
      await expect(page.getByRole('link', { name: /View the source/ })).toHaveAttribute(
        'href',
        'https://github.com/luizfbarbosa12/ProjetosCulturaisAI',
      );
      await expect(page.getByRole('heading', { level: 2, name: 'Current state' })).toBeVisible();
    }
    await expect(page.getByRole('link', { name: 'Next project' })).toHaveAttribute(
      'href',
      `/work/${study.nextSlug}`,
    );

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  }
});
