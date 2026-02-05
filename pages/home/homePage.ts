import { Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage';

export class HomePage extends BasePage {

    private readonly elementsButton: Locator;
    private readonly formsButton: Locator;

    constructor(page: Page) {
        super(page);
        this.elementsButton = page.getByText("Elements", { exact: true })
        this.formsButton = page.getByText("Forms", { exact: true })
    }

    async clickButtonElements() {
        await this.clickElement(this.elementsButton);
    }

    async clickButtonForms() {
        await this.clickElement(this.formsButton);
    }


}
