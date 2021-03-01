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
    login(email, password) {
        this.inputUsername.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
    notValid_login(email, password) {
        this.inputUsername.setValue(email);
        if (password=='itsEmpty') {
            this.inputPassword.setValue(' ');
        } else {
            this.inputPassword.setValue(password);
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
