// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('titre de Google', async ({ page }) => {
  await page.goto('https://esokia.com/fr');
  await expect(page).toHaveTitle(/esokia/);
});
