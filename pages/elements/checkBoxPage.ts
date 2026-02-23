import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class CheckBoxPage extends BasePage {

    private readonly notesCheckbox: Locator;
    private readonly expandButtons: Locator;

    constructor(page: Page) {
        super(page);
        this.notesCheckbox = page.getByLabel("Select Notes");
        this.expandButtons = page.locator('//span[contains(@class,"rc-tree-switcher_")]');
    }

   public async navigateCheckBoxPage() {
        await super.navigatePage("/checkbox");
    }
    public async expandFolder(index: number) {
        await super.clickElement(this.expandButtons.nth(index));
    }

    public async clickNotesCheckbox() {
        await super.clickElement(this.notesCheckbox);
    }

   public async verifySelectedCheckboxText(expected: string, isVisible: boolean) {
        let xpath: string = "//*[@id='result']//span[text()='" + expected + "']";
        let locator: Locator = this.page.locator(xpath);
        if (isVisible) {
            await expect(locator).toBeVisible();
        } else {
            await expect(locator).toBeHidden();
        }
    }

}