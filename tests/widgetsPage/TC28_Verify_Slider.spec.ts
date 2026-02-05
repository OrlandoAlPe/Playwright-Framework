import { test } from '../../fixtures/myFixtures';

test('Verify Slider', async ({ sliderPage }) => {

    await test.step('Verify Slider - Change Value', async ({ }) => {
        await sliderPage.navigateSliderPage();
        await sliderPage.selectAndVerifySliderRangeOf75();
        await sliderPage.selectAndVerifySliderRangeOf25();
    });

});
