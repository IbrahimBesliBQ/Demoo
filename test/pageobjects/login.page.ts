import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    private uNameCr = "standard_user"
    private uPassword = "secret_sauce"
    // elements
    public get username(){
        return $('#user-name');
    }
    public get password() {
        return $('#password');
    }

    public get loginButton() {
        return $('#login-button');
    }
    public get errorText() {
        return $('.error-message-container');
    }
    public get errorUsername() {
        return $('.error');
    }
    // methods
    async open(): Promise<void>{
        await super.open("/");
    }
    private async clickOnLogInButton() {
        await this.loginButton.click();
    }
    public async login(username: string, password: string) {
       this.open()
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.clickOnLogInButton()
        
    }
    public async loginWithCr() {
        this.open()
        await this.username.setValue(this.uNameCr)
        await this.password.setValue(this.uPassword)
        await this.clickOnLogInButton()
        
    }
}

export default new LoginPage();
