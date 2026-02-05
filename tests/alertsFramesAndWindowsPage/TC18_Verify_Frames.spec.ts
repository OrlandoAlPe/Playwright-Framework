import { test } from '../../fixtures/myFixtures';


test('Verify Frames', async ({ framesPage, nestedFramesPage }) => {

    await test.step('Verify Frames - Frame Content', async ({ }) => {
        await framesPage.navigateFramesPage();
        await framesPage.verifyFrameContent1();
        await framesPage.verifyFrameContent2();
    });

    await test.step('Verify Nested Frames', async ({ }) => {
        await nestedFramesPage.navigateNestedFramesPage();
        await nestedFramesPage.verifyNestedFramesContent();
    });

});
