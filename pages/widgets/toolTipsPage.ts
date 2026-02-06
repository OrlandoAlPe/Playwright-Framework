import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class ToolTipsPage extends BasePage {

    private readonly hoverButton: Locator;
    private readonly hoverTextField: Locator;
    private readonly hoverURL: Locator;
    private readonly hoverText: Locator;

    constructor(page: Page) {
        super(page);
        this.hoverButton = page.locator("#toolTipButton");
        this.hoverTextField = page.locator("#toolTipTextField");
        this.hoverURL = page.locator("//*[text()='Contrary']");
        this.hoverText = page.locator(".tooltip-inner");
    }

    public async navigateToolipsPage() {
        await super.navigatePage("/tool-tips");
    }

    private async hoverElementAndVerifyText(element: Locator, message: string) {
        await element.scrollIntoViewIfNeeded();
        await expect(element).toBeVisible();
        await element.dispatchEvent('mouseover');
        await expect(this.hoverText).toBeVisible({ timeout: 5000 });
        await expect(this.hoverText).toHaveText(message);
        await element.dispatchEvent('mouseout');
        await this.hoverText.waitFor({ state: "hidden", timeout: 5000 });
    }

    public async hoverButtonAndVerifyText() {
        await this.hoverElementAndVerifyText(this.hoverButton, "You hovered over the Button");
    }

    public async hoverTextFieldAndVerifyText() {
        await this.hoverElementAndVerifyText(this.hoverTextField, "You hovered over the text field");
    }

    public async hoverURLdAndVerifyText() {
        await this.hoverElementAndVerifyText(this.hoverURL, "You hovered over the Contrary");
    }

}