class ProfilePage {
    get dotsButton() { return $('.profile-tab-item.post_listing-item:nth-child(1) .profile-tab-menu') }
    get editButton() { return $('.profile-tab-item.post_listing-item:nth-child(1) a.profile-tab-menu-button') }
    get popupMessage() { return $('.popup_message--success .popup_message-text') }
    get deleteBtn() { return $('.profile-tab-item.post_listing-item:nth-child(1) .profile-tab-menu-button.profile-tab-menu-button--delete') }
    get popUp() { return $('.popup_message--error .popup_message-text') }
    get btnYes() { return $('.popup_message-actions .popup_message-button.popup_message-button--save') }
    get popupSuccses() { return $('.popup_message--success .popup_message-text') }

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
}


module.exports = new ProfilePage();