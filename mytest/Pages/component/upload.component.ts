import{Locator, Page} from '@playwright/test'
class UploadComponet{
    private page:Page
    uploadinput: string;
    submitbutton: Locator;
    successfultext:Locator
    constructor(page:Page)
    {
        this.page=page,
        this.uploadinput="input#upfile_1",
        this.submitbutton=page.locator("#upload_1"),
        this.successfultext=page.locator("#wfu_messageblock_header_1_label_1")

    }
    async uploadfile(filepath:string)
    {
        await this.page.setInputFiles(this.uploadinput,filepath)
        await this.submitbutton.click()
    }
}

export default UploadComponet ;