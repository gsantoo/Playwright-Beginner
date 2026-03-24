
import { test, expect } from '@playwright/test';
test.describe('Login Tests', () => {

test('Verify incorrect password', async ({ page }) => {
  const url = 'https://www.saucedemo.com/';
  await page.goto(url);
  const userName = page.locator('[data-test="username"]');
  await userName.click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('scrret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('Login', async ({ page }) => {
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();

})
test('Verify static controls in landing page', async ({ page }) => {
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

});

