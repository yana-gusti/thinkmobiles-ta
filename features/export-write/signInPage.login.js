class LoginPage {
    get inputUsername() { return $('input.input.sign_up-input') }
    get inputPassword() { return $('input.input.input-password') }
    get btnSubmit() { return $('button.sign_up-submit') }
    get url() { return 'https://thinkmobiles.com/sign-in/'; }

    async login(email, password) {
        await this.inputUsername.then(input => input.setValue(email));
        await this.inputPassword.then(input => input.setValue(password));
        await this.btnSubmit.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl() !== this.url,
        10000);
    }

    open () {
        return browser.url('https://thinkmobiles.com/sign-in/')
    }
}

module.exports = new LoginPage();
