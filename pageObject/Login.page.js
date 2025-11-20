// import {Page} from '@playwright/test';

class Homein{
    // /**
    // @param {Page} page
    //  */
    constructor(page){
        this.page=page;
        // this.closeLoginPopup= page.locator(".icClose");
        this.roundtripRadioBtn= page.locator('li p.gpfTmR:has-text("Round-trip")');
    }

    async clickRoundTripRdoBtn(){
        await this.closeLoginPopup.click();
        await this.roundtripRadioBtn.click();
    }

    // async goTo(){
    //     await this.page.goto("https://www.goibibo.com/");
    // }

}
export default new Homein();
