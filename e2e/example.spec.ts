import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://esokia.com/en');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Digital agency Mauritius, Paris, Madagascar & Vietnam | Esokia/);
});

