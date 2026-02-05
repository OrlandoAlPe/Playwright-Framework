import { test } from '../../fixtures/myFixtures';

test('Verify Droppable', async ({ droppablePage }) => {

    await test.step('Verify Droppable - Simple Drag and Drop', async ({ }) => {
        await droppablePage.executeSimpleDragAndDrop();
    });

    await test.step('Verify Droppable - Accept Behavior', async ({ }) => {
        await droppablePage.executeAcceptBehaviorDragAndDrop();
    });

});
