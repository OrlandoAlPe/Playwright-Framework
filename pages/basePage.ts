import { chromium, expect, Locator, Page } from "@playwright/test";
import path from "path";


export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyWeAreOnHomePage(newPage: Page) {
        await expect(newPage).toHaveURL('https://demoqa.com/');
    }

    protected async navigatePage(url: string) {
        await this.page.route('**/*', (route) => {
            const url = route.request().url();
            if (url.includes('googleads') ||
                url.includes('doubleclick') ||
                url.includes('adsystem') ||
                url.includes('google-analytics') ||
                url.includes('googlesyndication') ||
                url.includes('fontawesome') ||
                url.includes('ad.doubleclick.net') ||
                url.endsWith('.mp4') ||
                url.includes('api.ads.com')) {
                return route.abort();
            }
            return route.continue();
        });
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
    }

    protected async fillTextField(inputField: Locator, text: string) {
        await expect(inputField).toBeVisible();
        await inputField.scrollIntoViewIfNeeded();
        await inputField.fill(text);
    }

    protected async clickElement(locator: Locator) {
        await expect(locator).toBeVisible();
        await locator.scrollIntoViewIfNeeded();
        await locator.click();
    }

    protected async verifyText(actualMessage: string, expectedMessage: string) {
        await expect(actualMessage).toContain(expectedMessage);
    }

    protected async clickElementAndGetNewPage(element: Locator) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.clickElement(element)
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        return newPage;
    }

}