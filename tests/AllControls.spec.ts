import {test, expect} from '@playwright/test';

test('basic inputs', async({page})=>{
 await page.goto('https://testpages.eviltester.com/pages/input-elements/basic-inputs/')
 await page.getByRole('button', { name: 'A Button' }).click();
 await page.getByRole('checkbox', { name: 'Checkbox' }).check();
expect(await page.getByRole('checkbox', { name: 'Checkbox' }).isChecked()).toBeTruthy();
if ((await page.getByRole('radio', { name: 'Radio 1' }).isChecked()) === false) {
    await page.getByRole('radio', { name: 'Radio 1' }).check();
}

if ((await page.getByRole('radio', { name: 'Radio 2' }).isChecked()) === false) {
    await page.getByRole('radio', { name: 'Radio 2' }).check();
}
await page.getByRole('link', { name: 'Number Inputs' }).click();
await page.getByRole('spinbutton', { name: 'number with defaults' }).fill('20');
const slider = page.getByRole('slider', { name: 'range with defaults' })
await slider.focus();
for (let i = 0; i < 9; i++) {
    await slider.press('ArrowRight');
  }

  await page.getByRole('link', { name: 'Text Inputs' }).click();
  await page.getByRole('textbox', { name: 'Text', exact: true }).fill('Playwright');
  await page.getByRole('searchbox', { name: 'Search' }).fill('Playwright');
  await page.getByRole('textbox', { name: 'Password' }).fill('Playwright');
  await page.getByRole('textbox', { name: 'email url' }).fill('santosh@playwright.com');
  await page.getByRole('link', { name: 'Other Text', exact: true }).click();
  await page.getByLabel('Multiple Select').selectOption(['Selection Item 2', 'Selection Item 4']);
  await page.getByLabel('Select', { exact: true }).selectOption('Drop Down Item 3');
//   await page.getByRole('link', { name: 'Special Formats' }).click();
  await page.getByRole('link', { name: 'Form Elements' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'image' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();


  await page.goto('https://testpages.eviltester.com/apps/html-table-generator/');

  const table = page.locator('#dynamictable');
await page.getByRole('columnheader', { name: 'name' })
  const expectedHeaders = ['name', 'age'];
  const actualHeaders = await table.locator('th').allInnerTexts();
  expect(actualHeaders).toEqual(expectedHeaders);
 const expectedData = [
    ['Bob', '20'],
    ['George', '42']
  ];
const rows = table.locator('tr');
  const rowCount = await rows.count();

  // Start loop from index 1 to skip the header row (tr[0])
  for (let i = 1; i < rowCount; i++) {
    const actualRowValues = await rows.nth(i).locator('td').allInnerTexts();

   expect(actualRowValues).toEqual(expectedData[i - 1]);
//   await expect(slider).toHaveValue('59'); 
  }


});