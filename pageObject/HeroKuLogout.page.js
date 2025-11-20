// import { Page } from '@playwright/test';

class HerokuLogoutPage {
    // /**
    //  * 
    //  @param {Page} page
    //  */
    constructor(page) {
        this.page = page;
        this.Headertxt = page.locator(".example h2");
        this.successMsg = page.locator('div:has-text("You logged into a secure area!")');
        this.logoutBtn = page.locator(".button")
    }

    async verifyElementIsVisible() {
        await this.Headertxt.isVisible();
        await this.logoutBtn.isVisible();
    }

    async clickLogoutBtn() {
        await this.logoutBtn.click();
    }

    async getSuccessText() {
        return await this.successMsg.first().textContent();
    }
}
export default HerokuLogoutPage;
