import { test } from '../../fixtures/myFixtures';


test('Verify Check Box Selection', async ({ checkBoxPage }) => {

    await test.step('Navigate checkbox box page', async ({ }) => {
        await checkBoxPage.navigateCheckBoxPage();
    });


    await test.step('Expand "Home" folder, Expand "Desktop" folder and Select "Notes" checkbox', async () => {
        await checkBoxPage.expandFolder(0);
        await checkBoxPage.expandFolder(1);
        await checkBoxPage.clickNotesCheckbox();
    });

    await test.step('Verify "notes" appears in the result message', async () => {
        await checkBoxPage.verifySelectedCheckboxText("notes", true);
    });

    await test.step('Unselect "Notes" checkbox', async () => {
        await checkBoxPage.clickNotesCheckbox();
    });

    await test.step('Verify result message disappears', async () => {
        await checkBoxPage.verifySelectedCheckboxText("notes", false);
    });
});