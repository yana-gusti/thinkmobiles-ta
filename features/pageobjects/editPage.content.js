const { expect } = require("chai")

class EditPage {

    get inputNewTitle() { return $('#postTitle') }
    get inputNewContent() { return $('.content-text') }
    get btnSaveAsDraft() { return $('.actions_bar-button--draft') }
    get newImpression() { return $('.review_create-input') }
    get newLinkTitle() { return $$('.vendor_create-media-change_title-input') }
    get newLink() { return $$('.vendor_create-media-change_title-input') }
    get saveEditButton() { return $('.actions_bar-button.actions_bar-button--draft') };
    get popupSuccsessEdit() { return $('.popup_message.popup_message--information .popup_message-text') }

    get url() { return 'https://thinkmobiles.com/edit-post/'; }

    open() {
        return browser.url('https://thinkmobiles.com/edit-post/');
    }

    async editContent(editTitle, editContent) {
        const titleInput = await this.inputNewTitle;
        await titleInput.setValue();
        await titleInput.clearValue();
        await titleInput.setValue(editTitle);
        const contentInput = await this.inputNewContent;
        await contentInput.setValue(editContent);
        await browser.pause(1000);
        await this.btnSaveAsDraft.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl().then(url => !url.startsWith(super.url)),
            10000);
    }

    async editReview() {
        const dotsButt = $('.profile-tab-menu-icon.icon-dots');
        await dotsButt.then(btn => btn.click());
        const editReviewButton = $('.profile-tab-menu-item:nth-child(2) .profile-tab-menu-button');
        await editReviewButton.then(btn => btn.click());
    }

    async newRate(ratingIndex, rating) {
        const labels = await $(".review_create-rating-item:nth-child(" + ratingIndex + ") input[value='" + rating + "']");
        browser.execute("arguments[0].click();", labels);
    }

    async newImpressionField() {
        const newReviewImpression = await this.newImpression;
        await newReviewImpression.setValue();
        await newReviewImpression.clearValue();
        newReviewImpression.setValue(inputImpression());
        function inputImpression() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 35; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
    }

    async addNewVideoLink(linkTitle, link) {
        const titleLink = await this.newLinkTitle;
        const linkVideo = await this.newLink;
        await titleLink[0].setValue();
        await titleLink[0].clearValue();
        await titleLink[0].setValue(linkTitle);
        await linkVideo[1].setValue();
        await linkVideo[1].clearValue();
        await linkVideo[1].setValue(link);
        const addVideoButton = await $('.vendor_create-media-change_title-submit');
        addVideoButton.scrollIntoView();
        addVideoButton.click();
    }

    async saveEditReview() {
        await this.saveEditButton.then(btn => btn.click());
        await browser.pause(2000);
    }

    async reviewEditPopupMessage() {
        const msg = await this.popupSuccsessEdit;
        return await msg.getText();
    }

    async impressionSentence(impression) {
        await this.newImpression.then(input => input.setValue(impression));

    }

    async clearFields() {
        const impression = await $('.review_create-input');
        await browser.execute(input => input.focus(), impression);
        for (let i = 0; i < 40; i++) {
            await browser.keys('Back space');
        }
        await browser.pause(1000);
        const title = await $('.vendor_create-media-change_title-input'); 
        await browser.execute(input => input.focus(), title);
        for (let i = 0; i < 20; i++) {
            await browser.keys('Back space');
        }
        await browser.pause(2000);
        const linkVideo = await $('//*[@id="app"]/div/div[2]/div[1]/div[2]/div/div[3]/div/div[2]');
        await browser.execute(input => input.click(), linkVideo);
        for (let i = 0; i < 40; i++) {
            await browser.keys('Back space');
        }
        const saveButton = await $('.actions_bar-button.actions_bar-button--draft');
        saveButton.scrollIntoView();
        saveButton.click();

    }

}

module.exports = new EditPage();