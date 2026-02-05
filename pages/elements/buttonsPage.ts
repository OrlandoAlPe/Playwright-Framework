import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class ButtonsPage extends BasePage {

    private readonly doubleClickButton: Locator;
    private readonly rightClickButton: Locator;
    private readonly clickMeButton: Locator;
    private readonly doubleClickMesage: Locator;
    private readonly rightClickMesage: Locator;
    private readonly clickMeMesage: Locator;

    constructor(page: Page) {
        super(page);
        this.doubleClickButton = page.locator("#doubleClickBtn");
        this.rightClickButton = page.locator("#rightClickBtn");
        this.clickMeButton = page.getByText("Click Me", { exact: true });
        this.doubleClickMesage = page.locator("#doubleClickMessage");
        this.rightClickMesage = page.locator("#rightClickMessage");
        this.clickMeMesage = page.locator("#dynamicClickMessage");
    }

    public async navigateButtonsPage() {
        await super.navigatePage("/buttons");
    }

    public async verifyDoubleClickButton() {
        await expect(this.doubleClickButton).toBeVisible();
        await this.doubleClickButton.scrollIntoViewIfNeeded();
        await this.doubleClickButton.dblclick();
        await super.verifyText((await this.doubleClickMesage.innerText()).toString(), "You have done a double click");

    }

    public async verifyClickMeButton() {
        await super.clickElement(this.clickMeButton);
        await super.verifyText((await this.clickMeMesage.innerText()).toString(), "You have done a dynamic click");

    }

    public async verifyRightClickButton() {
        await expect(this.rightClickButton).toBeVisible();
        await this.rightClickButton.scrollIntoViewIfNeeded();
        await this.rightClickButton.click({ button: 'right' });
        await super.verifyText((await this.rightClickMesage.innerText()).toString(), "You have done a right click");

    }

}