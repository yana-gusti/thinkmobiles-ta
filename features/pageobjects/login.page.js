const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('input.input.sign_up-input') }
    get inputPassword() { return $('input.input.input-password') }
    get btnSubmit() { return $('.sign_up-submit') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   async login(email, password) {

     await (await this.inputUsername).setValue(email);
     await  (await this.inputPassword).setValue(password);
     await  (await this.btnSubmit).click();
    }
   async notValid_login(email, password) {
           await (await this.inputUsername).setValue(email);
        if (password=='itsEmpty') {
           await (await this.inputPassword).setValue(' ');
        } else {
           await (await this.inputPassword).setValue(password);
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

module.exports = new LoginPage();
