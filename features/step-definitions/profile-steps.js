const { Given, When, Then } = require('@cucumber/cucumber');
const { disable } = require('mockery');
const LoginPage = require('../pageobjects/login.page');
let date = new Date().getTime();



Given(/^I am on the login page$/,async () => {
    await LoginPage.open()
});


When(/^I login with (.+) and (.+)$/, async (email, password) => {
   await LoginPage.login(email, password)
});

//=================================================================================
When(/^I delete current user photo$/,async () => {
   let avatarDeleteBtn=await $('.profile-avatar-delete-button');
     await browser.pause(3000);
  await avatarDeleteBtn.click();
       await browser.pause(3000);
});

//When(/^I add new user photo$/,async () => {
//   let avatarBtn=await $('.profile-avatar-edit');
//   let input=await $('.post_create-banner-input')
////  await avatarBtn.click();
//       await browser.pause(3000);
//
//          const filePath = 'C:/Users/пк/Desktop/QA_ThinkMobiles/JustB.png'
//           const remoteFilePath =browser.uploadFile(filePath)
//
//         await  input.setValue(remoteFilePath)
//});



When(/^I change current user description to new (.*)$/,async (descr) => {
let userDescription = descr + date

   let userDescriptionButton=await $('.profile-description-text');
   let DescriptionInput= await $('[name="about"]');
  await browser.pause(3000);
   await userDescriptionButton.click()
    await DescriptionInput.clearValue()
   await DescriptionInput.setValue(userDescription)
   browser.keys("Enter");
});

When(/^I change current user name to new (.*)$/,async (name) => {
let userName = name + date

   let userNameButton=await $('.profile-name-edit');
   let nameInput= await $('[name="full name"]');
   await userNameButton.click()
    await nameInput.clearValue()
   await nameInput.setValue(userName)
   browser.keys("Enter");
});

Then(/^I see message : (.*)$/,async (text) => {
let messageDiv=$('.popup_message-text');
   await expect(messageDiv).toHaveTextContaining(text)
});
//===================================================================================



Then(/^I should see the main page with My profile$/,async () => {
   await browser.pause(3000);
   await expect(browser).toHaveTitle('My profile | ThinkMobiles')
});

Then(/^I should see the new page with (.*)$/,async (title) => {
   await expect(browser).toHaveTitleContaining(`${title}`)
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

