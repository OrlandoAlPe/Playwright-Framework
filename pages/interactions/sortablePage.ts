import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class SortablePage extends BasePage {

    private readonly listElements: Locator;

    constructor(page: Page) {
        super(page);
        this.listElements = this.page.locator("#demo-tabpane-list > div > div");
    }

    public async navigateSortablePage() {
        await super.navigatePage("/sortable");
    }

    public async moveElementsInTheList() {
        const firstElementText = await this.listElements.nth(0).innerText();
        await this.listElements.nth(0).dragTo(this.listElements.nth(5));
        await expect(this.listElements.nth(5)).toHaveText(firstElementText);
        await expect(this.listElements.nth(0)).toHaveText("Two");
    }

}