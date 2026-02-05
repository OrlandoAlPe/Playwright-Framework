import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class DynamicPropertiesPage extends BasePage {


    private readonly enableAfterButton: Locator;
    private readonly colorButton: Locator;

    constructor(page: Page) {
        super(page);
        this.enableAfterButton = page.locator("#enableAfter")
        this.colorButton = page.locator("#colorChange")
    }

    public async navigateDynamicPropertiesPage() {
        await super.navigatePage("/dynamic-properties");
    }

    public async verifyButtonEnablesAfterTime() {
        await expect(this.enableAfterButton).toBeVisible();
        await this.enableAfterButton.scrollIntoViewIfNeeded();
        await expect(this.enableAfterButton).toBeDisabled();
        await expect(this.enableAfterButton).toBeEnabled({ timeout: 5000 });
    }

    public async verifyButtonChangesColor() {
        await expect(this.colorButton).toHaveClass(/text-danger/, { timeout: 6000 });
    }
}