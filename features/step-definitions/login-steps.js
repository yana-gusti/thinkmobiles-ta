const { Given, When, Then } = require('@cucumber/cucumber');
const { disable } = require('mockery');
const LoginPage = require('../pageobjects/login.page');
// const request = require('request');



Given(/^I am on the login page$/,async () => {
    await LoginPage.open()
});



When(/^I click on (.+)$/, async (link) => {
    const MYlink =await ($(`[aria-label=${link}]`))
   await MYlink.click()
});

When(/^As a user, I click on (.+)$/,async (link) => {
    const MYlink =await ($(`=${link}`))
   await MYlink.click()
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
   await LoginPage.login(email, password)
});

When(/^I enter not valid (.*) or (.*)$/,async (email, password) => {

   await LoginPage.notValid_login(email, password)
});

Then(/^I should see the main page with My profile$/,async () => {
   await browser.pause(3000);
   await expect(browser).toHaveTitle('My profile | ThinkMobiles')
});

Then(/^I should see the new page with (.*)$/,async (title) => {
   await expect(browser).toHaveTitleContaining(`${title}`)
});

Then(/^I click on chekbox Stay logged in$/,async () => {

    const MYlink = $('.contact-us__checkbox-label')
   await MYlink.click()
});


Then(/^Login button is disabled$/,async () => {
    const loginBUTTON = $('.sign_up-submit')
   await expect(loginBUTTON).not.toBeClickable()
});


Then(/^User see (.+) error$/,async (message) => {
    const erMesage = $(`.input-error*=${message}`)
   await expect(erMesage)
        // .toHaveText(message)
        .toHaveTextContaining(message)

});

