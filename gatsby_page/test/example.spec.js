// @ts-check
import { test, expect } from '@playwright/test';

import settings from  '../../settings.json';

test('has title', async ({ page }) => {
  if (!settings.url) {
    throw new Error('Webpage URL has not been specified in settings.json');
  }
  await page.goto(settings.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Página principal/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
