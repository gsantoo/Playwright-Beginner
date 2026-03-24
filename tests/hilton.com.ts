import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hilton.com/en/');
  await page.getByRole('link', { name: 'Go Back' }).click();
});