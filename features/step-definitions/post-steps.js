const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../export-write/signInPage.login');
const PublicPage = require('../export-write/publicPage.content');
const EditPage = require('../export-write/editPage.content');
const ProfilePage = require('../export-write/profilePage');
const fs = require('fs');
const { expect } = require('chai');

Given('On Login page', () => {
    LoginPage.open();
});

When('Log in with {string}, {string}', async (login, password) => {
    await LoginPage.login(login, password);
    const url = await browser.getUrl();
    expect(url).to.equal('https://thinkmobiles.com/profile/');
    await browser.pause(1000);
});

When('On Profile page click on the Drafts button', async () => {
    await PublicPage.clickDraftButton();
});

When('Click on the Write post button', async () => {
    const writePostButton = $('.profile-tab-link');
    writePostButton.then(btn => btn.click());
});

Then('On the Write post page enter {string}, {string} and click on the Save as a Draft button', async (publication, content) => {
    await PublicPage.postContent(publication, content);
    await browser.pause(5000);
});

When('Edit {string} and {string}', async (newTitle, newContent) => {
    await ProfilePage.editFirstPost();
    await EditPage.editContent(newTitle, newContent);
    await browser.pause(5000);
});

Then('Get popup', async () => {
    const msg = await ProfilePage.getEditPopupMessage();
    console.log('MESSAGE: ' + msg);
    expect(msg).to.equal('Your changes were successfully saved!');
});

When('Click on the Delete post button', async () => {
    await ProfilePage.delete();
    await browser.pause(3000);
})

When('Get deletePopup', async () => {
    const msg = await ProfilePage.getPopupDelete();
    expect(msg).to.equal('Are you sure you want to delete the post?');
    await browser.pause(1000);
    await ProfilePage.confirmDelete();
})

Then('Get succsessPopup', async () => {
    const msg = await ProfilePage.getSuccsessDelete();
    expect(msg).to.equal('Your post has been successfully deleted!');
    console.log('MESSAGE ' + msg);
    await browser.pause(1000);
})

When('On the Write post page enter {string}', async title => {
    await PublicPage.publicTitle(title);
});

When('Input content of {string} into Content and save', { timeout: 120 * 1000 }, async path => {
    const text = await readFile(path);
    //console.log('TESTDATA: ' + text);
    await PublicPage.publicContent(text);
});

async function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

Then('Expect errorMessage', async () => {
    const msg = await PublicPage.errorPopup()
    expect(msg).to.equal('Fill all required fields');
    console.log('MESSAGE ' + msg);
    await browser.pause(1000);
});

