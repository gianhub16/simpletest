import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('SampleTest', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const page2Promise = page.waitForEvent('popup');
  await page.getByLabel('GitHub repository').click();
  const page2Page = await page2Promise;
  await page2Page.getByRole('banner').getByLabel('Homepage').click()
  await page2Page.waitForURL('https://github.com/')
  await page2Page.close()

  await page.bringToFront()
  await page.getByRole('link', { name: 'Get started' }).click()
  await page.getByRole('link', { name: 'Installation' }).click()
  await page.getByRole('link', { name: 'Generating tests' }).click()
});