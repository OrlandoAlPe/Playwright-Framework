import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class SliderPage extends BasePage {

    private readonly sliderInput: Locator;
    private readonly sliderValue: Locator;

    constructor(page: Page) {
        super(page);
        this.sliderInput = this.page.locator("input[type='range']");
        this.sliderValue = this.page.locator("#sliderValue");
    }

    public async navigateSliderPage() {
        await super.navigatePage("/slider");
    }

    private async selectAndVerifySliderRange(range: number) {
        await this.sliderInput.fill(range.toString());
        await expect(this.sliderValue).toHaveValue(range.toString());
    }

    public async selectAndVerifySliderRangeOf75() {
        await this.selectAndVerifySliderRange(75);
    }

    public async selectAndVerifySliderRangeOf25() {
        await this.selectAndVerifySliderRange(25);
    }

}