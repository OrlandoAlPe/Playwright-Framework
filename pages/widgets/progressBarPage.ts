import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class ProgressBarPage extends BasePage {

    private readonly startStopButton: Locator;
    private readonly progressBar: Locator;
    private readonly resetButton: Locator;

    constructor(page: Page) {
        super(page);
        this.startStopButton = this.page.locator("#startStopButton");
        this.progressBar = this.page.locator("#progressBar > div");
        this.resetButton = this.page.locator("#resetButton");
    }

    public async navigateProgressBarPage() {
        await super.navigatePage("/progress-bar");
    }

    public async runProgressBarToCompletion() {
        await super.clickElement(this.startStopButton);
        await this.resetButton.waitFor({ state: "visible", timeout: 15000 });
        await expect(this.progressBar).toHaveText("100%");
    }

}