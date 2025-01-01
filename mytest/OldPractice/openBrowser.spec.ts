import{test,expect,Browser,Page,Locator} from '@playwright/test'
import { firefox,chromium,webkit } from '@playwright/test'
import exp from 'constants'
test("login test",async()=>{
   const browser:Browser=await firefox.launch({headless:false})
   const page:Page=await browser.newPage()
  const email:Locator= await page.locator("#emailid")
 const title:string=await page.title()
 expect(title).toEqual("New title")
 await page.screenshot({path:"home.jpg"})
 

  
})
