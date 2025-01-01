import{test,expect} from '@playwright/test'
import CartPage from '../Pages/cart.page';
const path=require("path");
test.describe("This is test suite of uploadfile",()=>{
    let cartpage:CartPage
    test("should upload file",async({page})=>{
        cartpage=new CartPage(page)
     await page.goto("https://practice.sdetunicorns.com/cart/")
     const filepath=path.join(__dirname,'../Data/IMG_3885.jpg')
     //2.----------move below line for creation of method in upload.component.ts
     //await page.setInputFiles("input#upfile_1",filepath)
     //await page.locator("#upload_1").click()
    cartpage.uploadcomponet().uploadfile(filepath)

     await page.waitForTimeout(8000)
     //1.----------await expect(page.locator("#wfu_messageblock_header_1_label_1")).toContainText('uploaded successfully')
     await expect(cartpage.uploadcomponet().successfultext).toContainText('uploaded successfully')

    })

})