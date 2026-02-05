import { test } from '../../fixtures/myFixtures';


test('Verify Radio Button Selection', async ({ radioButtonPage }) => {

    await test.step('•	Navigate to demoqa.com/radio-button', async ({ }) => {
        await radioButtonPage.navigateRadioButtonPage();
    });

    await test.step('Click "Yes" radio button And Verify message displays "You have selected Yes"', async () => {
        await radioButtonPage.clickRadioButton("Yes");
        await radioButtonPage.verifyYouHaveSelectedText();
        await radioButtonPage.verifySelectedRadioButtonText("Yes");
    });

    await test.step('Click "Impressive" radio button And Verify message displays "You have selected Impressive"', async () => {
        await radioButtonPage.clickRadioButton("Impressive");
        await radioButtonPage.verifyYouHaveSelectedText();
        await radioButtonPage.verifySelectedRadioButtonText("Impressive");
    });


    await test.step('Verify "No" radio button is disabled', async () => {
        await radioButtonPage.verifyNoRadioButtonDisabled()
    });
});