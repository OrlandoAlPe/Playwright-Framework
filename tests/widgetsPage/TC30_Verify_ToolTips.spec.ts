import { test } from '../../fixtures/myFixtures';

test('Verify Tool Tips Page', async ({ toolTipsPage }) => {

    await test.step('Verify Tool Tips Page', async ({ }) => {
        await toolTipsPage.navigateToolipsPage();
        await toolTipsPage.hoverButtonAndVerifyText();
        await toolTipsPage.hoverTextFieldAndVerifyText();
        await toolTipsPage.hoverURLdAndVerifyText();
    });

});
