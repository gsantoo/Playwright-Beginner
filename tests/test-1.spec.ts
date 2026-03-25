import { test, type Page, expect, Browser  } from '@playwright/test';

 
test.describe('navigation', () => {
   let page: Page;
  let browser: Browser;
  test.beforeAll(async ({ browser }) => {
     const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://playwright.dev/');
  });

    test.afterAll(async () => {
   await page.context().browser()?.close();
  });


  test('test 1', async () => {
  // await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('h1')).toContainText('Installation');
  await page.getByRole('link', { name: 'API', exact: true }).click();

});
  test('test 2', async () => {
  // await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('API Request');
  await page.getByRole('button', { name: 'Clear the query' }).click();
});
});