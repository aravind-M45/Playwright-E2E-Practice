import {test,expect} from "@playwright/test"

test("Digit login with valid credentials",async ({page})=>{

    await page.goto("https://staging.digit-software.com/sign-in")
    await page.getByPlaceholder("Enter email or username").fill('sathwika.nellore@qualitlabs.com')
    await page.locator(".cl-formButtonPrimary").click()
    await page.getByPlaceholder("Enter your password").fill('Digit#123')
    await page.locator(".cl-formButtonPrimary").click()
    await page.waitForLoadState('networkidle');
    expect(page).toHaveTitle(/Scorecard/);
    expect(page).toHaveURL(/scorecard/);
})