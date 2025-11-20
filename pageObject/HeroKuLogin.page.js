// import { Page } from '@playwright/test';

class HerokuLoginPage {
    // /**
    //  * 
    //  @param {Page} page
    //  */
    constructor(page) {
        this.page = page;
        this.loginHeaderText = page.locator(".example h2");
        this.usernameLabel = page.locator("label[for='username']");
        this.usernameTxtFeild = page.locator("#username");
        this.passwordLabel = page.locator("label[for='password']");
        this.passwordTxtFeild = page.locator("#password");
        this.LoginBtn = page.locator(".radius");
        this.successLogoutMsg=page.locator('div:has-text("You logged out of the secure area!")');
        this.invalidErrorMsg=page.locator('div:has-text("Your username is invalid!")');
    }

    async navigateToHomePage(url) {
        await this.page.goto(url)
    }

    async isElementsVisible() {
        await this.loginHeaderText.isVisible();
        await this.usernameLabel.isVisible();
        await this.usernameTxtFeild.isVisible();
        await this.passwordLabel.isVisible();
        await this.passwordTxtFeild.isVisible();
        await this.LoginBtn.isVisible();
    }

    async login(username, password) {
        await this.usernameTxtFeild.fill(username);
        await this.passwordTxtFeild.fill(password);
        await this.LoginBtn.click();
    }

    async getInvalidText(){
        return await this.invalidErrorMsg.first().textContent();
    }

    async getLogoutSuccessMsg(){
        return await this.successLogoutMsg.first().textContent();
    }
}
export default HerokuLoginPage;
