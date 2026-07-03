
import { test, expect, Page } from "@playwright/test"
import { orangeHRMPage } from "../pages/orangeHRM.page";
import { Helpers } from "../utils/helpers";

test.describe.skip("orangeHRM Login tests", async () => {

    //Page Object
    let orangeObj: orangeHRMPage;
    let page: Page;

    test.beforeAll("Navigate to Application", async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        orangeObj = new orangeHRMPage(page);
        await orangeObj.navURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })
    test.beforeEach("Login with valid credentials", async () => {
        await orangeObj.fillusername("Admin");
        await orangeObj.fillpassword("admin123");
        await orangeObj.clickLoginButton();
        const dashboardLocator = page.getByRole("heading", { name: /Dashboard/i })
        await Helpers.verifyText(dashboardLocator, "Dashboard");

    })
    /*test("Login with invalid credentials", async () => {
        await orangeObj.navURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await orangeObj.fillusername("Admin123");
        await orangeObj.fillpassword("admin9978");
        await orangeObj.clickLoginButton();
        const errTextLocator = page.locator('p:has-text("Invalid credentials")');
        await Helpers.verifyText(errTextLocator, "Invalid credentials");
        await Helpers.verifyText(page.locator("title"), "OrangeHRM");
    })*/
})

test.describe("Admin tests", async () => {

    test("Admin", async ({ page, browserName }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await page.locator("input[name$='username']").fill(process.env.ORANGE_HRM_USERNAME || "Admin");
        await page.locator("input[name$='password']").fill(process.env.ORANGE_PASSWORD || "admin123");
        await page.locator("button[type='submit']").click();

        const viewport = page.viewportSize();

        // Mobile viewport: open the sidebar first
        if (viewport && viewport.width < 768) {
            await page.locator(".oxd-topbar-header-hamburger").click();
        }
        await page.getByText('Admin', { exact: true }).click();
        await expect(page).toHaveURL(/admin/i);
    });
})