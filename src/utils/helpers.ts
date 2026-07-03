import { expect, Locator } from "@playwright/test"

export class Helpers {

    //verify text of an element
    static async verifyText(locator: Locator, expectedText: string) {
        const actualText = await locator.innerText();
        expect(actualText).toBe(expectedText);
    }

    // Verify element is visible
    static async verifyVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    // Verify page title contains text
    static async verifyTitleContains(pageTitle: Promise<string>, expected: string) {
        const title = await pageTitle;
        expect(title).toContain(expected);
    }
}