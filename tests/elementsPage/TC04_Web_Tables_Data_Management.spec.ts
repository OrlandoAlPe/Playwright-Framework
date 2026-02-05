import { test } from '../../fixtures/myFixtures';
import webTablesData from "../../data/webTablesData.json"

test('Web Tables Data Management', async ({ webTablesPage }) => {

    await test.step('Navigate checkbox box page', async ({ }) => {
        await webTablesPage.navigateWebTablesPage();
    });

    await test.step('Verify Web Tables - Add New Record', async ({ }) => {
        await webTablesPage.fillRegistrationForm(webTablesData.Juan);
    });

    await test.step('Verify Web Tables - Edit Record', async ({ }) => {
        await webTablesPage.editEmployee(1, webTablesData.Carlos);
    });

    await test.step('Verify Web Tables - Delete Record', async ({ }) => {
        await webTablesPage.verifyRowDeleted(2, webTablesData.Kierra);
    });

});