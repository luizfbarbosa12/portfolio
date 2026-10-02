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

test('a case study has no detectable accessibility violations', async ({ page }) => {
  await page.goto('/work/ia-para-projetos-culturais');

  await expect(
    page.getByRole('heading', { level: 1, name: 'IA para Projetos Culturais' }),
  ).toBeVisible();

  const results = await new AxeBuilder({ page }).analyze();

  expect(results.violations).toEqual([]);
});
