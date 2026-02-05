
import { test } from '../../fixtures/myFixtures';


test('Verify Browser Windows  ', async ({ browerWindowsPage }) => {

    await test.step('Verify Browser Windows - New Tab', async ({ }) => {
        await browerWindowsPage.navigateBrowserWindowsPage();
        const newPage = await browerWindowsPage.clickNewTabButtonAndGetNavigatedPage();
        await browerWindowsPage.verifyWeNavigatedNewPage(newPage);
        await newPage.close();
    });

     await test.step('Verify Browser Windows - New Window', async ({ }) => {
        await browerWindowsPage.navigateBrowserWindowsPage();
        const newPage = await browerWindowsPage.clickNewWindowButtonAndGetNavigatedPage();
        await browerWindowsPage.verifyWeNavigatedNewPage(newPage);
        await newPage.close();
    });

});