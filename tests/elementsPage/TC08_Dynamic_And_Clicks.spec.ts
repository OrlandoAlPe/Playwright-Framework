import { test } from '../../fixtures/myFixtures';

test('Dynamic And Clicks Suite', async ({ buttonsPage, dynamicPropertiesPage, linksPage }) => {

    await test.step('Verify Buttons - Different Click Types', async ({ }) => {
        await buttonsPage.navigateButtonsPage();
        await buttonsPage.verifyClickMeButton();
        await buttonsPage.verifyDoubleClickButton();
        await buttonsPage.verifyRightClickButton();
    });

    await test.step('Verify Links - Open in New Tab', async ({ }) => {
        await linksPage.navigateLinksPage();
        const newTab = await linksPage.clickHomeLinkAndGetPage();
        await linksPage.verifyWeAreOnHomePage(newTab);
        await newTab.close();
    });

    await test.step('Verify Dynamic Properties - Enabled After', async ({ }) => {
        await dynamicPropertiesPage.navigateDynamicPropertiesPage();
        await dynamicPropertiesPage.verifyButtonEnablesAfterTime();
        await dynamicPropertiesPage.verifyButtonChangesColor();
    });
});