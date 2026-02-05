import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class DroppablePage extends BasePage {

    private readonly dragMeButton: Locator;
    private readonly simpleDropHereBox: Locator;
    private readonly simpleDropHereTitle: Locator;
    private readonly acceptTabButton: Locator;
    private readonly acceptDropHereBox: Locator;
    private readonly acceptDropHereTitle: Locator;
    private readonly notAcceptableButton: Locator;
    private readonly acceptableButton: Locator;

    constructor(page: Page) {
        super(page);
        this.dragMeButton = this.page.locator("#draggable")
        this.simpleDropHereBox = this.page.locator("#droppableExample-tabpane-simple #droppable")
        this.simpleDropHereTitle = this.page.locator("#droppableExample-tabpane-simple #droppable > p")
        this.acceptTabButton = this.page.locator("#droppableExample-tab-accept");
        this.notAcceptableButton = this.page.locator("#notAcceptable");
        this.acceptableButton = this.page.locator("#acceptable");
        this.acceptDropHereBox = this.page.locator("#droppableExample-tabpane-accept #droppable")
        this.acceptDropHereTitle = this.page.locator("#droppableExample-tabpane-accept #droppable> p")
    }

    public async navigateDroppablePage() {
        await super.navigatePage("/droppable");
    }

    public async executeSimpleDragAndDrop() {
        await this.navigateDroppablePage();
        await this.dragMeButton.dragTo(this.simpleDropHereBox);
        await expect(this.simpleDropHereTitle).toHaveText("Dropped!");
    }

    public async executeAcceptBehaviorDragAndDrop() {
        await this.navigateDroppablePage();
        await super.clickElement(this.acceptTabButton);
        await this.acceptDropHereBox.scrollIntoViewIfNeeded();
        await this.notAcceptableButton.dragTo(this.acceptDropHereBox);
        await expect(this.acceptDropHereTitle).toHaveText("Drop here");
        await this.notAcceptableButton.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(0, 0);
        await this.page.mouse.up();
        await this.acceptableButton.dragTo(this.acceptDropHereBox);
        await expect(this.acceptDropHereTitle).toHaveText("Dropped!");
    }

}