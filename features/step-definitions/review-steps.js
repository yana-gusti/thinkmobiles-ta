const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/signInPage.login');
const PublicPage = require('../pageobjects/publicPage.content');
const EditPage = require('../pageobjects/editPage.content');
const ProfilePage = require('../pageobjects/profilePage');
const fs = require('fs');
const { expect } = require('chai');


When('Open Review page', async () => {
    await ProfilePage.newReview();
    const leaveReview = $('.profile-tab-link');
    await leaveReview.then(btn => btn.click());
    
});

When('Click on the product and the Add video review', async () => {
    const product = $('.review_listing-item:nth-child(1) .review_listing-link');
    await product.then(btn => btn.click());
    const videoButton = $('.review_create-switch-item:nth-child(2) .review_create-switch-link');
    await videoButton.then(btn => btn.click());
});

When('Check the filds about time using software', async () => {
    const radioButton = $('.review_create-radio-item:nth-child(1)');
    await radioButton.then(btn => btn.click());
});

When('Check the rating breakdown {string}, {string}, {string}, {string}', async (s1, s2, s3, s4) => {
    await ProfilePage.rate(0, s1);
    await ProfilePage.rate(1, s2);
    await ProfilePage.rate(2, s3);
    await ProfilePage.rate(3, s4);
    
});

When('Fill the Your overall impression in one sentence field', async () => {
    await ProfilePage.impressionField();
    
});

When('Fill the {string}, {string} fields', async (linkTitle, link) => {
    await ProfilePage.addVideoLink(linkTitle, link);
});

Then('Click on the Save as draft button', async () => {
    await ProfilePage.saveReview();
});

When('On Profile page click on the Reviews and the Drafts buttons', async () => {
    await ProfilePage.newReview();
});

When('Click on the Delete review button', async () => {
    await ProfilePage.deleteReview();
});

When('Get deletePopup message', async () => {
    const msg = await ProfilePage.getPopupReviewDelete();
    expect(msg).to.equal('Are you sure you want to delete the review?');
    console.log('MESSAGE ',msg);
    await ProfilePage.confirmDeleteReview();
})

Then('Get succsessPopup message', async () => {
    const msg = await ProfilePage.getSuccsessDeleteReview();
    expect(msg).to.equal('Your review has been successfully deleted!');
    console.log('MESSAGE ' + msg);
});

When('Open Review page with review and click the Edit review button', async () => {
    await ProfilePage.newReview();
    await EditPage.editReview();
});

When('Change the filds about time using software', async () => {
    const radioButton = $('.review_create-radio-item:nth-child(2)');
    await radioButton.then(btn => btn.click());
});

When('Change the rating breakdown {string}, {string}, {string}, {string}', async (q1, q2, q3, q4) => {
    await EditPage.newRate(1, q1);
    await EditPage.newRate(2, q2);
    await EditPage.newRate(3, q3);
    await EditPage.newRate(4, q4);
});

When('Add the new Your overall impression in one sentence field', async () => {
    await EditPage.newImpressionField();
});

When('Add the new {string}, {string} fields', async (linkTitle, link) => {
    await EditPage.addNewVideoLink(linkTitle, link);
});

When('Save edit review', async () => {
    await EditPage.saveEditReview();
});

Then('Get edit succsess popup', async () => {
    const msgEdit = await EditPage.reviewEditPopupMessage();
    expect(msgEdit).to.equal('Review successfully saved to drafts');
});

When('Fill the {string} field', async () => {
    await ProfilePage.impressionField();
});

When('Clear all fields and save review', async () => {
    await EditPage.clearFields();
    await browser.pause(10000);
    await ProfilePage.saveReview();
});