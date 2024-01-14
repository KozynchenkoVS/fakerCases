import { test } from '@playwright/test';
const arr: ReadonlyArray<string> = Array(10)
  .fill(undefined)
  .map(() => Math.floor(Math.random() * Date.now()).toString(36));
for (const testCase of arr)
test(`has title ${testCase}`, async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
