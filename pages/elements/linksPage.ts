import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { promises } from "dns";

export class LinksPage extends BasePage {

    private readonly homeLink: Locator

    constructor(page: Page) {
        super(page);
        this.homeLink = page.locator("#simpleLink");
    }

    public async navigateLinksPage() {
        await super.navigatePage("/links");
    }

    public async clickHomeLink() {
        await super.clickElement(this.homeLink);
    }

    public async clickHomeLinkAndGetPage() {
        return super.clickElementAndGetNewPage(this.homeLink);
    }

}