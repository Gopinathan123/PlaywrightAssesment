import { test } from '@playwright/test';
import cred from '../testData/testData.json' with {type:'json'};
import MegnatoPage from '../pageObject/megnatoLogin.page';

test.describe('Verifing Login with valid and invalid credentials', tag{@smoke}, async () => {
    test("Megnato valid Cred", async ({ page }) => {
        let signinPage = new MegnatoPage(page);
        await signinPage.navigateToUrl(cred.url);
        await signinPage.clickSigninFromHome();
        await signinPage.signinAsUser(cred.valid.username, cred.valid.password);
        await page.waitForLoadState('domcontentloaded');
        await signinPage.loggedHeaderTxt();
        await signinPage.signoutAndAssert();
        await page.close();
    });
    test(`Megnato invalid Cred`, tag{@smoke}, async ({ page }) => {
        let signinPage = new MegnatoPage(page);
        await signinPage.navigateToUrl(cred.url);
        await signinPage.clickSigninFromHome();
        await signinPage.signinAsUser(cred.invalid.username, cred.invalid.password);
        await signinPage.errorMsgHandle();
        await page.close();
    });
})
