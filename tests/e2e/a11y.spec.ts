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
    await expect(page.getByRole('link', { name: 'Next project' })).toHaveAttribute(
      'href',
      `/work/${study.nextSlug}`,
    );

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  }
});
