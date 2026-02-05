import { expect, FrameLocator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class FramesPage extends BasePage {

    private readonly frame1: FrameLocator;
    private readonly frame2: FrameLocator;

    constructor(page: Page) {
        super(page);
        this.frame1 = this.page.frameLocator("#frame1");
        this.frame2 = this.page.frameLocator("#frame2");
    }

    public async navigateFramesPage() {
        await super.navigatePage("/frames");
    }

    private async verifyFrameContent(frame: FrameLocator) {
        await expect(frame.locator('#sampleHeading')).toContainText("This is a sample page");
    }

    public async verifyFrameContent1() {
        await this.verifyFrameContent(this.frame1);
    }

    public async verifyFrameContent2() {
        await this.verifyFrameContent(this.frame2);
    }
}