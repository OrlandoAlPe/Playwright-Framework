import { test } from '../../fixtures/myFixtures';

test('Verify text box form submission ', async ({ textBoxPage }) => {

  await test.step('Navigate text box page', async ({ }) => {
    await textBoxPage.navigateTextboxPage();
  });
  
  await test.step('Fill text boxes data', async () => {
    await textBoxPage.fillTextBoxesData();
  });

  await test.step('Click Submit button', async () => {
    await textBoxPage.clickSubmitButon();
  });

  await test.step('Verify all submitted data is displayed correctly in the output section', async () => {
    await textBoxPage.verifySubmitedTextDisplayed();
  });

});