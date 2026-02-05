import { expect, Locator, Page } from "@playwright/test";


export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyWeAreOnHomePage(newPage: Page) {
        await expect(newPage).toHaveURL('https://demoqa.com/');
    }

    protected async navigatePage(url: string) {
        await this.page.goto(url);
    }

    protected async fillTextField(inputField: Locator, text: string) {
        await expect(inputField).toBeVisible();
        await inputField.scrollIntoViewIfNeeded();
        await inputField.fill(text);
    }
    
    protected async clickElement(locator: Locator) {
        await expect(locator).toBeVisible();
        await locator.scrollIntoViewIfNeeded();
        await locator.click();
    }

    protected async verifyText(actualMessage: string, expectedMessage: string) {
        await expect(actualMessage).toContain(expectedMessage);
    }

    protected async clickElementAndGetNewPage(element: Locator) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.clickElement(element)
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        return newPage;
    }

}