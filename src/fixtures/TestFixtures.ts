// testFixture.ts
import { test as base,} from '@playwright/test';
import { Test01 } from '../pages/testcase01.page';

// Extend Playwright's base test with a custom fixture

export const test = base.extend<{
  saveLogs: void;
  testObj: Test01;
}>({
  saveLogs: [
    async ({}, use) => {
      console.log('Global before is running ...');

      await use();

      console.log('Global afterEach is running ...');
    },
    { auto: true }
  ],
  testObj: async ({ page }, use) => {
    const testObj = new Test01(page);
    await use(testObj);
  }
});

export { expect } from "@playwright/test";
