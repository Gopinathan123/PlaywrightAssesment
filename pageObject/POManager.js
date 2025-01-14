import login from './HeroKuLogin.page';
import logout from './HeroKuLogout.page';

class POManager{
    constructor(page){
        this.page=page;
        this.login=new login(this.page);
        this.logout=new logout(this.page);
    }
    getLoginPage(){
        return this.login;
    }
    getLogoutPage(){
        return this.logout;
    }
}
export default POManager;