const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('input[name=email]') }
    get inputPassword () { return $('input[name=password]') }
    get inputPassword2 () { return $('input[name=confirmPassword]') }
    get btnSubmit () { return $('.sign_up-submit') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (this.inputPassword).setValue(password);
        await (this.inputPassword2).setValue(password);
        await (this.btnSubmit).click();
    };

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
