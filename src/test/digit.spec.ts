import { test, expect } from "@playwright/test"
import { digitLoginPage } from "../pages/digitLogin.page";

test("Digit login with valid credentials", async ({ page }) => {
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
})