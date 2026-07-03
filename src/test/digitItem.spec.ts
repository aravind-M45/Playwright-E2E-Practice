import { test, expect } from "@playwright/test"
import { digitLoginPage } from "../pages/digitLogin.page";

test("Item creation", async ({ page,request }) => {
    const login = new digitLoginPage(page)
    await login.navigateToApplication();
    await login.enterEmail(`${process.env.DIGIT_EMAIL}`)
    await login.clickContinue()
    console.log(`${process.env.DIGIT_PASSWORD}`)
    await login.enterPassword(`${process.env.DIGIT_PASSWORD}`)
    await login.clickContinue()
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/Scorecard/);
    await expect(page).toHaveURL(/scorecard/);

    await page.getByRole('button', { name: 'Items' }).click();
    await page.getByRole('button', { name: 'New item' }).click();
    await page.getByText('Inventory item', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('E2E_TestItem');
    await page.getByRole('combobox', { name: 'Default stock UoM' }).click();
    await page.getByRole('option', { name: 'Each (ea)' }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'E2E_TestItem' })).toBeVisible();
})



// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {

  
// });