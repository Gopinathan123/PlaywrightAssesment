import { test, expect } from '@playwright/test';
import Credencials from '../testData/data.json' with {type: 'json'};
import POManager from '../pageObject/POManager';

test.describe.configure({mode:'parallel'})
test("Login with valid Credentials", async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const logoutPage = poManager.getLogoutPage()

    await loginPage.navigateToHomePage(Credencials.url);
    await loginPage.isElementsVisible();
    await loginPage.login(Credencials.valid.username, Credencials.valid.password);
    expect(await logoutPage.getSuccessText()).toContain("You logged into a secure area!");
    await logoutPage.clickLogoutBtn();
    expect(await loginPage.getLogoutSuccessMsg()).toContain("You logged out of the secure area!");
    await page.close();
});
test("Login with invalid Credentials", async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.navigateToHomePage(Credencials.url);
    await loginPage.login(Credencials.invalid.username, Credencials.invalid.password);
    expect(await loginPage.getInvalidText()).toContain("Your username is invalid!");
    await page.close();
})
