// @ts-check
import { test, expect } from '@playwright/test';

import settings from  '../../settings.json';

test.beforeEach(async ({ page }) => {
  if (!settings.url) {
    throw new Error('Webpage URL has not been specified in settings.json');
  }
  await page.goto(settings.url);
});

test.describe('Tab navigation', () => {
  test('Can focus menu links', async ({ page, browser }) => {
    await page.waitForLoadState();
    const checkCurrentSelector = async (text) => {
          return await expect(page.getByRole('link').getByText(text))
              .toBeFocused();
        }
    await page.keyboard.press('Tab');
    await checkCurrentSelector('Página principal');
    await page.keyboard.press('Tab');
    await checkCurrentSelector('Sobre esta página');
    await page.keyboard.press('Tab');
    await checkCurrentSelector('Página de ejemplo');
  });
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
