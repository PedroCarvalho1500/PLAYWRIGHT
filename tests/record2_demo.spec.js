import { test, expect } from '@playwright/test';
const {chromium} = require('@playwright/test')

test('@Web test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('dsssdd');
  await page.getByRole('button', { name: 'Search' }).click();
});