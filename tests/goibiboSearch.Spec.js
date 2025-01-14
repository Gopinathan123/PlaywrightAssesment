import { test, expect } from '@playwright/test';
// import Homein  from '../pageObject/Login.page.js';

test("Search Roundtrip", async ({ page }) => {
    await page.goto("https://www.goibibo.com/");
    const homePage = new Homein(page);
    // await homePage.goto();
    await homePage.clickRoundTripRdoBtn();
})
