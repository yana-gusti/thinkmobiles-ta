const { Given, When, Then} = require('@cucumber/cucumber');
const { disable } = require('mockery');
const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profilePage');
const PublicPage = require('../pageobjects/publicPage.content');
const request = require('request');
const fs = require("fs");
const path = require('path');

Given(/^I am on the login page$/,async () => {
    await LoginPage.open()
});

When(/^I click on (.+)$/, async (link) => {
    const MYlink = $(`[aria-label=${link}]`)
    await MYlink.click()
});

When(/^As a user, I click on (.+)$/,async (link) => {
    const MYlink = $(`=${link}`)
    await MYlink.click()
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I expect to see a Main page$/,async () => {
    await browser.pause(3000);
    await expect(browser).toHaveTitle('My profile | ThinkMobiles')
});

Then(/^Pick Reviews in menu$/, () => {
    const reviewLink = 	$("[data-title*='Reviews']");
    browser.pause(3000);
    reviewLink.click();
    console.log(reviewLink.getText());
});

Then(/^Click Leave a review link$/, () => {
    const leaveReviewLink = $("a[href$='https://thinkmobiles.com/leave-review/']");
    browser.pause(3000);
    leaveReviewLink.waitForExist();
    leaveReviewLink.click();
});

Then(/^Find an EnPass application$/, () => {
    const appFinder = $('.review_listing-search-input')
    browser.pause(3000);
    appFinder.setValue("EnPass");
    const searchButton = $('.review_listing-search-icon');
    searchButton.click();
});

Then(/^Click a Review button$/,  () => {
     const reviewButton = $('.review_listing-link');
     browser.pause(3000);
     reviewButton.click()
});

Then(/^Fill in term of use$/, () => {
    const termOfUse = $('.review_create-radio-label');
    termOfUse.click();
});

Then(/^Fill in an app rating$/, () => {
     ProfilePage.rate(0, 1);
     ProfilePage.rate(1, 1);
     ProfilePage.rate(2, 1);
     ProfilePage.rate(3, 1);
     browser.pause(3000);
});

Then(/^Input an overall impression from "impression.txt"$/, () => {
    let filename = "impression.txt";
    let contentImpr = fs.readFileSync(process.cwd() + "/" + filename).toString();
    const imprText =  $('.review_create-input');
    imprText.setValue(contentImpr);
    browser.pause(3000);
});

Then(/^Input a Review description from "review.txt"$/, () => {
    let filename = "review.txt";
    let contentReview = fs.readFileSync(process.cwd() + "/" + filename).toString();
    // console.log(contentReview);
    const contentText = $('.content-text');
    contentText.setValue(contentReview);
    browser.pause(3000);
});

Then(/^Save as a draft$/, () => {
    const saveAsDraftBtn = $('.actions_bar-button.actions_bar-button--draft');
    saveAsDraftBtn.click();
});