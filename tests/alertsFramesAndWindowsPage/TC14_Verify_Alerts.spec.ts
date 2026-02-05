import { test } from '../../fixtures/myFixtures';


test('Verify Alerts', async ({ alertsPage }) => {

    await test.step('Verify Alerts - Simple Alert', async ({ }) => {
        await alertsPage.navigateAlertsPage();
        await alertsPage.clickAcceptAlertPopUp();
    });

    await test.step('Verify Alerts - timer Alert', async ({ }) => {
        await alertsPage.clickAcceptAlertPopUp5Secs();
    });

    await test.step('Verify Alerts - Confirm Box', async ({ }) => {
        await alertsPage.clickAcceptAlertPopConfirmationButton();
        await alertsPage.clickDeclineAlertPopConfirmationButton();
    });

     await test.step('Verify Alerts - Confirm Box', async ({ }) => {
        await alertsPage.typeAndConfirmPrompPopConfirmationButton("Hello World");
    });

});

