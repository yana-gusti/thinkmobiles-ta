const { Given, When, Then } = require('@cucumber/cucumber');
const { disable } = require('mockery');
const LoginPage = require('../pageobjects/login.page');
// const request = require('request');

let date = new Date().getTime();


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

//=================================================================================

When(/^I change current user description to new (.*)$/,async (descr) => {
let userDescription = descr + date

   let userDescriptionButton=await $('.profile-description-text');
   let DescriptionInput= await $('[name="about"]');
   await userDescriptionButton.click()
    await DescriptionInput.clearValue()
   await DescriptionInput.setValue(userDescription)
   browser.keys("Enter");
   await browser.pause(3000);
});

When(/^I change current user name to new (.*)$/,async (name) => {
let userName = name + date

   let userNameButton=await $('.profile-name-edit');
   let nameInput= await $('[name="full name"]');
   await userNameButton.click()
    await nameInput.clearValue()
   await nameInput.setValue(userName)
   browser.keys("Enter");
   await browser.pause(3000);
});

Then(/^I see message (.*)$/,async (text) => {
let messageDiv=$('.popup_message-text');

console.log(text)

   await expect(messageDiv)
        .toHaveTextContaining(text)
         browser.pause(5000);
});
//===================================================================================


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

