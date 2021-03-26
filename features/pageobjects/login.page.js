const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() { return $('input.input.sign_up-input') }
    get inputPassword() { return $('input.input.input-password') }
    get btnSubmit() { return $('.sign_up-submit') }
    get url() { return 'https://thinkmobiles.com/sign-in/'; }


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


    open () {
        return browser.url('https://thinkmobiles.com/sign-in/')
    }
}

module.exports = new LoginPage();
