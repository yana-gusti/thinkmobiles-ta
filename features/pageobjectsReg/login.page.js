const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () { return $('input[name=email]') }
    get inputPassword () { return $('input[name=password]') }
    get inputPassword2 () { return $('input[name=confirmPassword]') }
    get btnSubmit () { return $('.sign_up-submit') }


    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.inputPassword2.setValue(password);
        this.btnSubmit.click();
    };


    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
