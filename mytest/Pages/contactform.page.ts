import{Page,Locator} from '@playwright/test'
class ContactPage{
    private page:Page
   
    firstname:Locator;
    email:Locator;
    phonenumber:Locator;
    message:Locator;
   submitbutton:Locator;
   successfulmsg:Locator

    constructor(page:Page){
        this.page=page
        this.firstname= page.locator("#evf-277-field_ys0GeZISRs-1")
        this .email=page.locator(" #evf-277-field_LbH5NxasXM-2")
        this.phonenumber=page.locator("#evf-277-field_66FR384cge-3")
        this.message= page.locator("#evf-277-field_yhGx3FOwr2-4")
        this.submitbutton=page.locator("#evf-submit-277")
        this.successfulmsg=page.locator('div[role="alert"]')
       
        
    }
    async navigate()
    {
        await this.page.goto("https://practice.sdetunicorns.com/contact/")
    }
    async submitdata(firsname:string,email:string,phone:number,message:string){
       await this.navigate()
       await this.firstname.fill(firsname)
       await this.email.fill(email)
       await this.phonenumber.fill(phone.toString())
       await this.message.fill(message)
       await this.submitbutton.click()
    }
}
export default ContactPage;