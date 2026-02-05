import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class WebTablesPage extends BasePage {

    private readonly addNewRecordButton: Locator;
    private readonly submitButton: Locator;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly emailField: Locator;
    private readonly ageField: Locator;
    private readonly salaryField: Locator;
    private readonly departmentField: Locator;
    private readonly searchTextBox: Locator;
    private readonly searchButton: Locator;
    private readonly tableRows: Locator;

    constructor(page: Page) {
        super(page);
        this.addNewRecordButton = page.locator("#addNewRecordButton");
        this.firstNameField = page.locator("#firstName");
        this.lastNameField = page.locator("#lastName");
        this.emailField = page.locator("#userEmail");
        this.ageField = page.locator("#age");
        this.salaryField = page.locator("#salary");
        this.departmentField = page.locator("#department");
        this.submitButton = page.locator("#submit");
        this.searchTextBox = page.locator("#searchBox");
        this.searchButton = page.locator("#basic-addon2");
        this.tableRows = page.locator(".action-buttons");
    }

    public async navigateWebTablesPage() {
        await super.navigatePage("/webtables");
    }

    public async fillRegistrationForm(employeeData: any) {
        await super.clickElement(this.addNewRecordButton);
        await this.fillData(employeeData);
        await super.clickElement(this.submitButton);
        await this.verifyEmployeeInTable(employeeData);
    }

    public async editEmployee(editIndex: number, employeeData: any) {
        await super.clickElement(this.page.getByTitle("Edit").nth(editIndex));
        await this.fillData(employeeData);
        await super.clickElement(this.submitButton);
        await this.verifyEmployeeInTable(employeeData);
    }

    public async verifyRowDeleted(deleteIndex: number, employeeData: any) {
        const initialCount = await this.tableRows.count();
        await super.clickElement(this.page.getByTitle("Delete").nth(deleteIndex));
        await expect(initialCount).toBeGreaterThan(await this.tableRows.count());
        const valuesToVerify = Object.values(employeeData);
        for (const value of valuesToVerify) {
            const element = await this.page.getByRole("gridcell", { name: String(value) });
            await expect(element).toBeHidden();
        }
    }

    public async searchForEmployee(employeeData: any) {
        await this.fillTextField(this.searchTextBox, employeeData.name);
        await super.clickElement(this.searchButton);
        await this.verifyEmployeeInTable(employeeData);
        await expect(await this.tableRows.count()).toEqual(1);
    }

    private async fillData(employeeData: any) {
        await super.fillTextField(this.firstNameField, employeeData.firstName);
        await super.fillTextField(this.lastNameField, employeeData.lastName);
        await super.fillTextField(this.ageField, employeeData.age);
        await super.fillTextField(this.emailField, employeeData.email);
        await super.fillTextField(this.salaryField, employeeData.salary);
        await super.fillTextField(this.departmentField, employeeData.department);
    }

    private async verifyEmployeeInTable(employeeData: any) {
        const valuesToVerify = Object.values(employeeData);
        for (const value of valuesToVerify) {
            const element = await this.page.getByRole("gridcell", { name: String(value), exact: true }).nth(0);
            await expect(element).toBeVisible();
        }
    }

}