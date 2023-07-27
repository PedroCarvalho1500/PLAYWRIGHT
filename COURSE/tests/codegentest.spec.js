import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Pesquisar' }).click();
  await page.getByRole('combobox', { name: 'Pesquisar' }).fill('rahul sheety academy');
  await page.getByRole('combobox', { name: 'Pesquisar' }).press('Enter');
  // await page.getByRole('link', { name: 'Login' }).click();
  // await page.getByRole('heading', { name: 'Exibindo resultados para rahul shetty academy Em vez disso, pesquisar por rahul sheety academy' }).click();
  // await page.getByRole('link', { name: 'Rahul Shetty Academy: Selenium, API Testing, Software ... rahulshettyacademy.com https://rahulshettyacademy.com' }).click();
  // await page.getByRole('link', { name: 'Login' }).click();
});