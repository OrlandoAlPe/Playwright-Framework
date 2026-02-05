import { test } from '../../fixtures/myFixtures';

test('Verify Progress Bar', async ({ progressBarPage }) => {

    await test.step('Verify Progress Bar - Start/Stop', async ({ }) => {
        await progressBarPage.navigateProgressBarPage();
        await progressBarPage.runProgressBarToCompletion();
    });

});
