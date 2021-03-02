const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjectsReg/login.page');
const SecurePage = require('../pageobjectsReg/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I login with (.+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password)
});

Then(
    /^I expect that element "([^"]*)?" contains the text "([^"]*)?"$/, (selector, stringExpectedText) =>{
     browser.pause(3000);
     const elem = $(selector);
     elem.waitForDisplayed();
     const text = elem.getText();
     expect(text).toContain(stringExpectedText);
});

When(
    /^I click the element "([^"]*)?"$/, (selector) =>{
    const homePage = $(selector);
    homePage.waitForDisplayed();
    homePage.click();
    
});

Then(
    /^Page title is equal to "([^"]*)?"$/, (stringExpectedText) =>{
    browser.pause(3000);
    expect(browser).toHaveTitle(stringExpectedText)
});
