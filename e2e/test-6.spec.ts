import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('krishen.goinden@outlook.com');
  await page.locator('body').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('0000');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://sicom-stg.sitefinity.cloud/portal/home?key=m5qanpKYn5+d&connected_id=551b4149-b8f7-4b39-9fde-c6bdcb50e94c&nid=7Zmam5idmJiTmpqTmpI=');
  await page.getByRole('row', { name: 'Finance Lease 3476 |' }).getByRole('link').nth(2).click();
  await page.goto('https://sicom-stg.sitefinity.cloud/portal/details-policy?policyNumber=3476&out-standing-due-tab=true&&key=m5qanpKYn5%20d&connected_id=551b4149-b8f7-4b39-9fde-c6bdcb50e94c&isAdmin=false');
  await page.getByRole('button', { name: 'Pay : Rs' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});