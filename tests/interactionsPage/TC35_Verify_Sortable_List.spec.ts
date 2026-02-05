import { test } from '../../fixtures/myFixtures';

test('Verify Sortable', async ({ sortablePage }) => {

    await test.step('Verify Sortable - List Sorting', async ({ }) => {
        await sortablePage.navigateSortablePage();
        await sortablePage.moveElementsInTheList();
    });

});
