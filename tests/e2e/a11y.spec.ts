import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('the scaffold has no detectable accessibility violations', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('main')).toHaveCount(1);

  const results = await new AxeBuilder({ page }).analyze();

  expect(results.violations).toEqual([]);
});
