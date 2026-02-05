import { test as base } from '@playwright/test';
import { TextBoxPage } from '../pages/elements/textBoxPage';
import { CheckBoxPage } from '../pages/elements/checkBoxPage';
import { RadioButtonPage } from '../pages/elements/radioButtonPage';
import { WebTablesPage } from '../pages/elements/webTablesPage';
import { ButtonsPage } from '../pages/elements/buttonsPage';
import { LinksPage } from '../pages/elements/linksPage';
import { DynamicPropertiesPage } from '../pages/elements/dynamicProperties';
import { FormsPage } from '../pages/forms/formsPage';
import { BrowserWindowsPage } from '../pages/alertsFramesAndWindows/browserWindowsPage';
import { AlertsPage } from '../pages/alertsFramesAndWindows/alertsPage';
import { FramesPage } from '../pages/alertsFramesAndWindows/framesPage';
import { NestedFramesPage } from '../pages/alertsFramesAndWindows/nestedFramesPage';
import { SliderPage } from '../pages/widgets/sliderPage';
import { ProgressBarPage } from '../pages/widgets/progressBarPage';
import { ToolTipsPage } from '../pages/widgets/toolTipsPage';
import { SortablePage } from '../pages/interactions/sortablePage';
import { DroppablePage } from '../pages/interactions/droppablePage';

type MyFixtures = {
    textBoxPage: TextBoxPage;
    checkBoxPage: CheckBoxPage;
    radioButtonPage: RadioButtonPage;
    webTablesPage: WebTablesPage;
    buttonsPage: ButtonsPage;
    linksPage: LinksPage;
    dynamicPropertiesPage: DynamicPropertiesPage;
    formsPage: FormsPage;
    browerWindowsPage: BrowserWindowsPage;
    alertsPage: AlertsPage;
    framesPage: FramesPage;
    nestedFramesPage: NestedFramesPage;
    sliderPage: SliderPage;
    progressBarPage: ProgressBarPage;
    toolTipsPage: ToolTipsPage;
    sortablePage: SortablePage;
    droppablePage: DroppablePage;
};

export const test = base.extend<MyFixtures>({

    radioButtonPage: async ({ page }, use) => {
        await use(new RadioButtonPage(page));
    },
    textBoxPage: async ({ page }, use) => {
        await use(new TextBoxPage(page));
    },
    checkBoxPage: async ({ page }, use) => {
        await use(new CheckBoxPage(page));
    },
    webTablesPage: async ({ page }, use) => {
        await use(new WebTablesPage(page));
    },
    buttonsPage: async ({ page }, use) => {
        await use(new ButtonsPage(page));
    },
    linksPage: async ({ page }, use) => {
        await use(new LinksPage(page));
    },
    dynamicPropertiesPage: async ({ page }, use) => {
        await use(new DynamicPropertiesPage(page));
    },
    formsPage: async ({ page }, use) => {
        await use(new FormsPage(page));
    },
    browerWindowsPage: async ({ page }, use) => {
        await use(new BrowserWindowsPage(page));
    },
    alertsPage: async ({ page }, use) => {
        await use(new AlertsPage(page));
    },
    framesPage: async ({ page }, use) => {
        await use(new FramesPage(page));
    },
    nestedFramesPage: async ({ page }, use) => {
        await use(new NestedFramesPage(page));
    },
    sliderPage: async ({ page }, use) => {
        await use(new SliderPage(page));
    },
    progressBarPage: async ({ page }, use) => {
        await use(new ProgressBarPage(page));
    },
    toolTipsPage: async ({ page }, use) => {
        await use(new ToolTipsPage(page));
    },
    sortablePage: async ({ page }, use) => {
        await use(new SortablePage(page));
    },
    droppablePage: async ({ page }, use) => {
        await use(new DroppablePage(page));
    }

});
