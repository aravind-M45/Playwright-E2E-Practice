import { test, expect, chromium, Browser, Page } from "@playwright/test";
import { digitLoginPage } from "../pages/digitLogin.page";
import { DigitItemPage } from "../pages/digitItem.page";

let browser: Browser;
let page: Page;


test.describe("Digit Item",{tag:"@digit"}, () => {
    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();

        const login = new digitLoginPage(page);
        await login.navigateToApplication();
        await login.enterEmail(`${process.env.DIGIT_EMAIL}`);
        await login.clickContinue();
        await login.enterPassword(`${process.env.DIGIT_PASSWORD}`);
        await login.clickContinue();
        await page.waitForLoadState("networkidle");
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test("Item creation", async () => {
        const digitItemPage = new DigitItemPage(page);
        await digitItemPage.navigateToItemPage();
        await digitItemPage.selectInventoryItem();
        await digitItemPage.enterItemName("E2E_TestItem");
        await digitItemPage.selectUOM();
        await digitItemPage.saveItem();
        await digitItemPage.verifyItemCreation();
    });

    test("Item deletion", async () => {
        const digitItemPage = new DigitItemPage(page);
        await digitItemPage.navigateToItemPage();
        await digitItemPage.searchItem();
        await digitItemPage.selectSearchItem();
        await digitItemPage.openMenu();
        await digitItemPage.selectDeleteOption();
        await digitItemPage.confirmItemDeletion();
    });
});