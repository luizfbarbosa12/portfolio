import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('the scaffold has no detectable accessibility violations', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('section[data-theme="dark"]')).toHaveCount(1);
  await expect(page.locator('section[data-theme="light"]')).toHaveCount(1);

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
