class ProfilePage {
    get dotsButton() { return $('.profile-tab-item.post_listing-item:nth-child(1) .profile-tab-menu') }
    get editButton() { return $('.profile-tab-item.post_listing-item:nth-child(1) a.profile-tab-menu-button') }
    get popupMessage() { return $('.popup_message--success .popup_message-text') }
    get deleteBtn() { return $('.profile-tab-item.post_listing-item:nth-child(1) .profile-tab-menu-button.profile-tab-menu-button--delete') }
    get popUp() { return $('.popup_message.popup_message--error .popup_message-text') }
    get btnYes() { return $('.popup_message-actions .popup_message-button.popup_message-button--save') }
    get popupSuccses() { return $('.popup_message--success .popup_message-text') }
    get saveButton() { return $('.post_create-actions .actions_bar-button.actions_bar-button--draft') };
    get deleteReviewPopup() { return $('.popup_message.popup_message--error .popup_message-text') }
    get yesDelete() { return $('.popup_message-actions .popup_message-button.popup_message-button--save') }
    get succsessDeleteReview() { return $('.popup_message--success .popup_message-text') }
 

    get url() { return 'https://thinkmobiles.com/profile/'; }

    open() {
        return browser.url('https://thinkmobiles.com/profile/')
    }

    async editFirstPost() {
        await browser.pause(3000);
        await this.dotsButton.then(btn => btn.click());
        await this.editButton.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl().then(url => !url.startsWith(super.url)),
            10000);
    }

    async getEditPopupMessage() {
        const msg = await this.popupMessage;
        return await msg.getText();
    }

    async delete() {
        await this.dotsButton.then(btn => btn.click());
        await this.deleteBtn.then(btn => btn.click());
    }
    async getPopupDelete() {
        let popUpTextDelete;
        await this.popUp.then(msg => msg.getText().then(txt => popUpTextDelete = txt));
        return popUpTextDelete;
    }

    async confirmDelete() {
        await this.btnYes.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl().then(url => !url.startsWith(super.url)),
            10000);
    }
    async getSuccsessDelete() {
        let popUpTextSuccsess;
        await this.popupSuccses.then(msg => msg.getText().then(txt => popUpTextSuccsess = txt));
        return popUpTextSuccsess;
    }

    async newReview() {
        const reviewsButton = $('[data-title="Reviews"]');
        await reviewsButton.then(btn => btn.click());
        await browser.pause(3000);
        const reviewsDraft = $('[data-title="Drafts"');
        await reviewsDraft.then(btn => btn.click());
        await browser.pause(3000);
    }

    async rate(ratingIndex, rating) {
        const reviewRatingItems = await $$('.review_create-rating-item');
        const labels = await reviewRatingItems[ratingIndex].$$('label');
        labels[0].scrollIntoView();
        labels[0].click({ x: (rating - 1) * 17 });
    }

    async impressionField() {
        let reviewImpression = await $('.review_create-input') ;
        reviewImpression.setValue(inputImpression());
    function inputImpression() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 35; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
    }

    async addVideoLink(linkTitle, link) {
        const titleLink = await $$('.vendor_create-media-change_title-input');
        const linkVideo = await $$('.vendor_create-media-change_title-input');
        await linkVideo[1].setValue(link);
        await titleLink[0].setValue(linkTitle);
        const addVideoButton = await $('.vendor_create-media-change_title-submit.error-color');
        addVideoButton.scrollIntoView();
        addVideoButton.click();
    }

    async saveReview() {
        await this.saveButton.then(btn => btn.click());
        await browser.pause(2000);
    }

    async deleteReview() {
        const dotsButt = $('.profile-tab-menu-icon.icon-dots');
        await dotsButt.then(btn => btn.click());
        const deleteReviewButton = $('.profile-tab-menu-button.profile-tab-menu-button--delete');
        await deleteReviewButton.then(btn => btn.click());
    }

    async getPopupReviewDelete() {
        let deleteMSG;
        await this.deleteReviewPopup.then(msg => msg.getText().then(txt => deleteMSG = txt));
        return deleteMSG;
    }

    async confirmDeleteReview() {
        await this.yesDelete.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl().then(url => !url.startsWith(super.url)),
            10000);
    }

    async getSuccsessDeleteReview() {
        let popUpTextSuccsessDelete;
        await this.succsessDeleteReview.then(msg => msg.getText().then(txt => popUpTextSuccsessDelete = txt));
        return popUpTextSuccsessDelete;
    }
}


module.exports = new ProfilePage();