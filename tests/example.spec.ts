import { test } from '@playwright/test';
import {faker } from '@faker-js/faker'
const arr: ReadonlyArray<string> = Array.apply(null, new Array(3)).map(()=> faker.string.uuid())
for (const testCase of arr)
test(`has title ${testCase}`, async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
