import { test } from '../../fixtures/myFixtures';
import studentsData from '../../data/formsPageData.json'

test('Forms & Uploads Suite', async ({ formsPage }) => {

    await test.step('Verify Practice Form - Complete Submission', async ({ }) => {
        await formsPage.navigateFormsPage();
        await formsPage.fillStudentRegistry(studentsData.Orlando);
        await formsPage.clickSubmitButon();
        await formsPage.verifyConfirmationModal(studentsData.Orlando);
    });

    await test.step('Verify Practice Form - Mandatory Fields Validation', async ({ }) => {
        await formsPage.navigateFormsPage();
        await formsPage.clickSubmitButon();
        await formsPage.verifyMandatoryFieldsEmpty();
    });

});