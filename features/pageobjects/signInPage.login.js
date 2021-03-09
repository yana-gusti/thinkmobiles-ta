const Page = require('./signInPage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('input.input.sign_up-input') }
    get inputPassword() { return $('input.input.input-password') }
    get btnSubmit() { return $('button.sign_up-submit') }

    async login(email, password) {
        await this.inputUsername.then(input => input.setValue(email));
        await this.inputPassword.then(input => input.setValue(password));
        await this.btnSubmit.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl() !== super.url,
        10000);
    }

   
    open() {
        return super.open();
    }
}

module.exports = new LoginPage();
