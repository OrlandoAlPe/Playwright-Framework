import { expect, FrameLocator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class NestedFramesPage extends BasePage {

    private readonly parentFrame: FrameLocator;
    private readonly childFrame: FrameLocator;

    constructor(page: Page) {
        super(page);
        this.parentFrame = this.page.frameLocator("#frame1");
        this.childFrame = this.parentFrame.frameLocator("iframe");
    }

    public async navigateNestedFramesPage() {
        await super.navigatePage("/nestedframes");
    }

    public async verifyNestedFramesContent() {
        await expect(this.parentFrame.getByText("Parent frame")).toBeVisible();
        await expect(this.childFrame.getByText("Child Iframe")).toBeVisible();
    }
}