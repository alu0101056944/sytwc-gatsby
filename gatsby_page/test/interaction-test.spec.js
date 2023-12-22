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
  test('Can focus menu links', async ({ page }) => {
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
  
  test('Can focus all initial buttons', async ({ page }) => {
    await page.waitForLoadState();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').filter({ hasText: /Like/ }).nth(0))
        .toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').filter({ hasText: /Dislike/ }).nth(0))
        .toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').filter({ hasText: /Like/ }).nth(1))
        .toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').filter({ hasText: /Dislike/ }).nth(1))
        .toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').filter({ hasText: /Like/ }).nth(2))
        .toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').filter({ hasText: /Dislike/ }).nth(2))
        .toBeFocused();
  });

  test('Can focus all initial scrollable cards', async ({ page }) => {
    await page.waitForLoadState();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.locator('.card-main').nth(0)).toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.locator('.card-main').nth(1)).toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.locator('.card-main').nth(2)).toBeFocused();
  });

  test('Can reach the form', async ({ page }) => {
    await page.waitForLoadState();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.locator('input[type="text"]')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('input[type="email"]')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').filter({ hasText: /Submit/ }))
        .toBeFocused();
  });

  test('Can reach second building component', async ({ page }) => {
    await page.waitForLoadState();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.locator('.card-main').nth(3)).toBeFocused();
  });
});
