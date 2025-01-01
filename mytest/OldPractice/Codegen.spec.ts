import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Gmail').click();
  await page.locator('._buttonGroup_dqfj5_2 > gws-dropdown-button > .label-tracker').first().click();
  await page.getByRole('link', { name: 'Gmail - For my personal use' }).click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('gfg@gmail.com');
  await page.getByLabel('Last name (optional)').click();
  
});