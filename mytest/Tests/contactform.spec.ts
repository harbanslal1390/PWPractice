import{test,expect} from '@playwright/test'
import ContactPage  from '../Pages/contactform.page'
test.describe("Contact form",()=>{
     let contactpage:ContactPage
    
    test("Fill contact form and verify successful message ",async({page})=>{
    contactpage=new ContactPage(page)
    await page.goto("https://practice.sdetunicorns.com/contact/")
    await contactpage.navigate()
    // await page.locator("#evf-277-field_ys0GeZISRs-1").fill("Fake First Name")
    // await page.locator(" #evf-277-field_LbH5NxasXM-2").fill("Fakeemailid@gmail.com")
    // await page.locator("#evf-277-field_66FR384cge-3").fill("08733373637")
    // await page.locator("#evf-277-field_yhGx3FOwr2-4").fill("This is my message")
    // await page.locator("#evf-submit-277").click()
    contactpage=new ContactPage(page)
    await contactpage.submitdata("Fake First Name","Fakeemailid@gmail.com",999876543,"This is my message")
    await page.waitForTimeout(5000)

    await expect(contactpage.successfulmsg).toHaveText("Thanks for contacting us! We will be in touch with you shortly")
 

    })
})
