
class PublicPage {

    get inputTitle() { return $('#postTitle') }
    get inputContent() { return $('.ql-editor') }
    get btnSave() { return $('button.actions_bar-button.actions_bar-button--draft') }
    get draftBtn() { return $('[data-title="Drafts"]') }
    get errorPopUp() { return $('.popup_message-block .popup_message-text')}

    get url() { return 'https://thinkmobiles.com/write-post/'; }
    open () {
        return browser.url('https://thinkmobiles.com/write-post/')
    }
    
    async postContent(title, content) {
        await this.inputTitle.then(input => input.setValue(title));
        await this.inputContent.then(input => input.setValue(content));
        await this.btnSave.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl().then(url => !url.startsWith(super.url)),
            10000);
    }

    async clickDraftButton() {
        await this.draftBtn.then(btn => btn.click());
        await browser.pause(3000);
    }
    async publicTitle(title) {
        await this.inputTitle.then(input => input.setValue(title));
    }

    async publicContent(content){
        await this.inputContent.then(input => input.setValue(content));
        await this.btnSave.then(btn => btn.click());
    }
    async errorPopup() {
        let popUpError;
        await this.errorPopUp.then(msg => msg.getText().then(txt => popUpError = txt));
        return popUpError;
    
    }
}

module.exports = new PublicPage();