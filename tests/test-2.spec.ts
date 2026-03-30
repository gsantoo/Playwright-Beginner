import { test, expect } from '@playwright/test';

[
  { firstValue: '12', secondValue: '12', expected: '24' },
  { firstValue: '14', secondValue: '12', expected: '26' },
  { firstValue: '16', secondValue: '12', expected: '27' },
].forEach(({ firstValue, secondValue, expected }) => {

  test(`test ${firstValue} + ${secondValue}`, async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/apps/server-side-calculator/');
  await page.locator('#number1').click();
  await page.locator('#number1').fill(`${firstValue}`);
  await page.locator('#number2').click();
  await page.locator('#number2').fill(`${secondValue}`);
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByRole('main')).toContainText(`Answer : ${expected}`);
});
});