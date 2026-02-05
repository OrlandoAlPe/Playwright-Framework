import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";
import textBoxData from "../../data/textBoxData.json"

export class TextBoxPage extends BasePage {

    private readonly fullNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly currentAdressInput: Locator;
    private readonly permanentAdressInput: Locator;
    private readonly submitButton: Locator;
    private readonly nameText: Locator;
    private readonly emailText: Locator;
    private readonly currentAdressText: Locator;
    private readonly permanentAdressText: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameInput = page.locator("#userName");
        this.emailInput = page.locator("#userEmail");
        this.currentAdressInput = page.locator("#currentAddress");
        this.permanentAdressInput = page.locator("#permanentAddress");
        this.submitButton = page.locator("#submit");
        this.nameText = page.locator("#name");
        this.emailText = page.locator("#email");
        this.currentAdressText = page.locator("//p[@id='currentAddress']");
        this.permanentAdressText = page.locator("//p[@id='permanentAddress']");
    }

    public async navigateTextboxPage() {
        await super.navigatePage("/text-box");
    }

    public async fillTextBoxesData() {
        await super.fillTextField(this.fullNameInput, textBoxData.defaultValues.fullName);
        await super.fillTextField(this.emailInput, textBoxData.defaultValues.email);
        await super.fillTextField(this.currentAdressInput, textBoxData.defaultValues.currentAddress);
        await super.fillTextField(this.permanentAdressInput, textBoxData.defaultValues.permanentAddress);
    }

    public async clickSubmitButon() {
        await super.clickElement(this.submitButton);
    }

    public async verifySubmitedTextDisplayed() {
        await expect(this.nameText).toContainText(textBoxData.defaultValues.fullName);
        await expect(this.emailText).toContainText(textBoxData.defaultValues.email);
        await expect(this.currentAdressText).toContainText(textBoxData.defaultValues.currentAddress);
        await expect(this.permanentAdressText).toContainText(textBoxData.defaultValues.permanentAddress);
    }

}

