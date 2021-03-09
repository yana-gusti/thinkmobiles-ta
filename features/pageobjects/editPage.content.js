
class EditPage {

    get inputNewTitle() { return $('#postTitle') }
    get inputNewContent() { return $('.content-text') }
    get btnSaveAsDraft() { return $('.actions_bar-button--draft') }

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
        await browser.pause(5000);
        await this.btnSaveAsDraft.then(btn => btn.click());
        await browser.waitUntil(async () => await browser.getUrl().then(url => !url.startsWith(super.url)),
            10000);
    }
}

module.exports = new EditPage();