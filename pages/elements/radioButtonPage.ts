import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class RadioButtonPage extends BasePage {


    private readonly noRadioButton: Locator;
    private readonly selectedButtonText: Locator;
    private readonly youHaveSelectedText: Locator;

    constructor(page: Page) {
        super(page);
        this.noRadioButton = page.locator("#noRadio");
        this.selectedButtonText = page.locator(".text-success");
        this.youHaveSelectedText = page.locator(".mt-3");
    }

    public async navigateRadioButtonPage() {
        await super.navigatePage("/radio-button");
    }

    public async clickRadioButton(name: "Yes" | "Impressive") {
        await super.clickElement(this.page.getByText(name));
    }

    public async verifySelectedRadioButtonText(expectedText: string) {
        await expect(this.selectedButtonText).toContainText(expectedText);
    }

    public async verifyYouHaveSelectedText() {
        await expect(this.youHaveSelectedText).toContainText("You have selected ");
    }
    private async verifyRadioButtonDisabled(element: Locator) {
        await expect(element).toHaveAttribute('disabled');
    }

    public async verifyNoRadioButtonDisabled() {
        await this.verifyRadioButtonDisabled(this.noRadioButton);
    }

}