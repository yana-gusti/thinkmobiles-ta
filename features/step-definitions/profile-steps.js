const { Given, When, Then } = require('@cucumber/cucumber');
const { disable } = require('mockery');
const LoginPage = require('../pageobjects/login.page');
let date = new Date().getTime();



Given(/^I am on the login page$/,async () => {
    await LoginPage.open()
});

When(/^I login with email : (.+) and password : (.+)$/, async (email, password) => {
   await LoginPage.login(email, password)
});

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
//          const filePath = 'C:\Users\пк\Desktop\QA_ThinkMobiles\JustB.png'
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


Then(/^I should see the main page with My profile$/,async () => {
   await browser.pause(3000);
   await expect(browser).toHaveTitle('My profile | ThinkMobiles')
});

Then(/^I go to ThinkMobiles main page$/,async () =>{
  let tmLogo=await $('.logo-link');
//    let tmLogo=await $('[data-title="Posts"]');
//browser.url('https://thinkmobiles.com/posts/')
  await tmLogo.click()
  await browser.pause(3000);
});

Then(/^I adding (.*) who follow by me$/,async (user) =>{
   const followBtn =await $('.profile-info-link');
   const link =await $(`=${user}`)

  await link.click()
  await followBtn.click()
  await browser.url('https://thinkmobiles.com/profile/?view=following')
  await browser.pause(3000);
});

Then(/^I delete my follower from followers list$/,async () =>{
   const unfollowBtn =await $('.profile-follower-button');
   await unfollowBtn.click()
  await browser.pause(3000);
});

Then(/^I go to profile settings$/,async () =>{
   const settingsBtn =await $('=Settings');
   await settingsBtn.click()
  await browser.pause(3000);
});

Then(/^I change my password to new$/,async () =>{
   const changeBtn =await $('//*[@id="app"]/div/div[2]/div/main/div/div[2]/div/div/button');
   const oldPass=await $('//*[@id="app"]/div/div[2]/div/main/div/div[2]/form/div[1]/input');
   const newPass=await $('//*[@id="app"]/div/div[2]/div/main/div/div[2]/form/div[2]/input');
   const confirmPass=await $('//*[@id="app"]/div/div[2]/div/main/div/div[2]/form/div[3]/input');
   const saveBtn=await $('//*[@id="app"]/div/div[2]/div/main/div/div[2]/form/div[4]/button[2]');


   await changeBtn.click();
   await oldPass.setValue('lolyP0P11');
   await newPass.setValue('mustang43');
   await confirmPass.setValue('mustang43');
   await saveBtn.click();
  await browser.pause(5000);

// for tests i return old password
   await changeBtn.click();
   await oldPass.setValue('mustang43');
   await newPass.setValue('lolyP0P11');
   await confirmPass.setValue('lolyP0P11');
   await saveBtn.click();
  await browser.pause(2000);
});
