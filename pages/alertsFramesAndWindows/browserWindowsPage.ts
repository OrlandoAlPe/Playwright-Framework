import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";


export class BrowserWindowsPage extends BasePage {

    private readonly newTabButton: Locator;
    private readonly newWindowButton: Locator;

    constructor(page: Page) {
        super(page);
        this.newTabButton = this.page.locator("#tabButton");
        this.newWindowButton = this.page.locator("#windowButton");
    }

    public async navigateBrowserWindowsPage() {
        await super.navigatePage("/browser-windows");
    }

    public async clickNewTabButtonAndGetNavigatedPage() {
        return await this.clickElementAndGetNewPage(this.newTabButton);
    }

    public async clickNewWindowButtonAndGetNavigatedPage() {
        return await super.clickElementAndGetNewPage(this.newWindowButton);
    }

    public async verifyWeNavigatedNewPage(newPage: Page) {
        await expect(newPage).toHaveURL('https://demoqa.com/sample');
        const text = await newPage.locator('#sampleHeading').textContent();
        expect(text).toContain('This is a sample page');
    }

}