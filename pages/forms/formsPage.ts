import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";
import path from "node:path";
export class FormsPage extends BasePage {

    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly mobileInput: Locator;
    private readonly adressInput: Locator;
    private readonly autoFillSubject: Locator;
    private readonly submitButton: Locator;
    private readonly selectStateTextField: Locator;
    private readonly selectCityTextField: Locator;
    private readonly dateOfBirthInput: Locator;
    private readonly monthDatePicker: Locator;
    private readonly yearDatePicker: Locator;
    private readonly uploadPictureInput: Locator;
    private readonly confirmationModalTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameInput = page.locator("#firstName");
        this.lastNameInput = page.locator("#lastName");
        this.emailInput = page.locator("#userEmail");
        this.mobileInput = page.locator("#userNumber");
        this.adressInput = page.locator("#currentAddress");
        this.autoFillSubject = page.locator("#subjectsInput");
        this.submitButton = page.locator("#submit");
        this.selectStateTextField = page.getByText("Select State");
        this.selectCityTextField = page.getByText("Select City");
        this.dateOfBirthInput = page.locator("#dateOfBirthInput");
        this.monthDatePicker = page.locator(".react-datepicker__month-select");
        this.yearDatePicker = page.locator(".react-datepicker__year-select");
        this.uploadPictureInput = page.locator("#uploadPicture");
        this.confirmationModalTitle = page.locator("#example-modal-sizes-title-lg");
    }

    public async navigateFormsPage() {
        await super.navigatePage("/automation-practice-form");
    }

    public async clickSubmitButon() {
        await super.clickElement(this.submitButton);
    }

    public async fillStudentRegistry(studentData: any) {
        await super.fillTextField(this.firstNameInput, studentData.firstName);
        await super.fillTextField(this.lastNameInput, studentData.lastName);
        await super.fillTextField(this.mobileInput, studentData.mobile);
        await super.fillTextField(this.emailInput, studentData.email);
        await super.fillTextField(this.adressInput, studentData.address);

        await this.selectBirthDay(studentData.birthDay.year, studentData.birthDay.month, studentData.birthDay.day);
        await this.selectGender(studentData.gender);

        for (const hobbie of studentData.hobbies) {
            await super.clickElement(this.page.getByText(hobbie));
        }
        await this.uploadFile(studentData.fileName);
        for (const subject of studentData.subjects) {
            await this.fillAutocomplete(this.autoFillSubject, subject);
        }

        await this.fillAutocomplete(this.selectStateTextField, studentData.state);
        await this.fillAutocomplete(this.selectCityTextField, studentData.city);
    }

    private async selectGender(gender: "Male" | "Female" | "Other") {
        await super.clickElement(this.page.getByText(gender, { exact: true }));
    }

    private async fillAutocomplete(autoFillElement: Locator, text: string) {
        await autoFillElement.scrollIntoViewIfNeeded();
        await super.clickElement(autoFillElement);
        await autoFillElement.pressSequentially(text, { delay: 10 })
        await this.page.keyboard.press('Enter')

    }

    private async selectBirthDay(year: string, month: string, day: string) {
        await super.clickElement(this.dateOfBirthInput);
        await this.yearDatePicker.selectOption(year);
        await this.monthDatePicker.selectOption(month);
        const dayPath = "//*[contains(@aria-label,'" + month + "') and text()='" + day + "']";
        await super.clickElement(this.page.locator(dayPath));
    }

    private async uploadFile(fileName: string) {
        const filePath = path.resolve(__dirname, '../../data/' + fileName);
        await this.uploadPictureInput.setInputFiles(filePath);
    }

    public async verifyConfirmationModal(studentData: any) {
        await expect(this.confirmationModalTitle).toBeVisible();
        await expect(this.page.getByText(studentData.firstName + " " + studentData.lastName)).toBeVisible();
        await expect(this.page.getByText(studentData.mobile)).toBeVisible();
        await expect(this.page.getByText(studentData.birthDay.day + " " + studentData.birthDay.month + "," + studentData.birthDay.year)).toBeVisible();
        await expect(this.page.getByText(studentData.email)).toBeVisible();
        await expect(this.page.locator('td').getByText(studentData.gender)).toBeVisible();
        await expect(this.page.getByText(studentData.address)).toBeVisible();
        await expect(this.page.getByText(studentData.state + " " + studentData.city)).toBeVisible();
    }

    public async verifyMandatoryFieldsEmpty() {
        await this.verifyTextFieldEmpty(this.firstNameInput);
        await this.verifyTextFieldEmpty(this.lastNameInput);
        await this.verifyGenderRadiosError();

    }

    private async verifyTextFieldEmpty(locator: Locator) {
        await expect(locator).toBeVisible();
        await expect(locator).toHaveCSS("border-color", 'rgb(220, 53, 69)');
    }

    private async verifyGenderRadiosError() {
        const genders = ["Male", "Female", "Other"];
        for (const gender of genders) {
            const locator = this.page.getByText(gender, { exact: true });
            await expect(locator).toHaveCSS('color', 'rgb(220, 53, 69)');
        }
    }

}