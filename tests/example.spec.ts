import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test('hello world link', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/');

  // Click the hello link.
  await page.getByRole('link', { name: 'Hello' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible();

  // take screenshot: https://playwright.dev/docs/screenshots
  // attach screenshot: https://www.youtube.com/watch?v=CNiKT-qCj40
  await testInfo.attach('hello', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});
