import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://esokia.com/en');
  await page.locator('#header_container').getByRole('link', { name: 'Solutions', exact: true }).click();
  await page.getByRole('link', { name: 'See our solutions' }).click();
  await page.getByRole('button', { name: 'CONTACT AN EXPERT', exact: true }).click();
  await page.getByRole('textbox', { name: 'First name*' }).click();
  await page.getByRole('textbox', { name: 'First name*' }).fill('d');
  await page.getByRole('textbox', { name: 'Last name*' }).click();
  await page.getByRole('textbox', { name: 'Last name*' }).fill('d');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('d');
  await page.getByRole('textbox', { name: 'Phone number*' }).click();
  await page.getByRole('textbox', { name: 'Phone number*' }).fill('d');
  await page.getByRole('textbox', { name: 'Company*' }).click();
  await page.getByRole('textbox', { name: 'Company*' }).fill('d');
  await page.getByRole('textbox', { name: 'Your message*' }).click();
  await page.getByRole('textbox', { name: 'Your message*' }).fill('d');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('.RenderPopup_line-right__wZMKP').click();
  await page.locator('#header_container').getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Custom development' }).click();
});