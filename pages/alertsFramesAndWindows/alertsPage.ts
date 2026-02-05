import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class AlertsPage extends BasePage {

    private readonly alertButton: Locator;
    private readonly alertButton5Secs: Locator;
    private readonly confirmationAlertButton: Locator;
    private readonly confirmationAlertText: Locator;
    private readonly promtAlertButton: Locator;
    private readonly promptResultText: Locator;

    constructor(page: Page) {
        super(page);
        this.alertButton = this.page.locator("#alertButton");
        this.alertButton5Secs = this.page.locator("#timerAlertButton");
        this.confirmationAlertButton = this.page.locator("#confirmButton");
        this.confirmationAlertText = this.page.locator("#confirmResult");
        this.promtAlertButton = this.page.locator("#promtButton");
        this.promptResultText = this.page.locator("#promptResult");
    }

    public async navigateAlertsPage() {
        await super.navigatePage("/alerts");
    }


    private async acceptPopUp() {
        await this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
    }

    private async declinePopUp() {
        await this.page.once('dialog', async dialog => {
            await dialog.dismiss();
        });
    }

    private async promptPopUp(message: string) {
        await this.page.once('dialog', async dialog => {
            await dialog.accept(message);
        });
    }

    public async clickAcceptAlertPopUp() {
        await this.acceptPopUp();
        await super.clickElement(this.alertButton);
    }

    public async clickAcceptAlertPopUp5Secs() {
        await super.clickElement(this.alertButton5Secs);
        const dialog = await this.page.waitForEvent('dialog');
        await dialog.accept();
    }

    public async clickAcceptAlertPopConfirmationButton() {
        await this.acceptPopUp();
        await super.clickElement(this.confirmationAlertButton);
        await expect(this.confirmationAlertText).toHaveText("You selected Ok");
    }

    public async clickDeclineAlertPopConfirmationButton() {
        await this.declinePopUp();
        await super.clickElement(this.confirmationAlertButton);
        await expect(this.confirmationAlertText).toHaveText("You selected Cancel");
    }

    public async typeAndConfirmPrompPopConfirmationButton(word: string) {
        await this.promptPopUp(word)
        await super.clickElement(this.promtAlertButton);
        await expect(this.promptResultText).toHaveText("You entered " + word);
    }

}