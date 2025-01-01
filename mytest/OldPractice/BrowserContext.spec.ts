import{test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'
import { firefox,chromium,webkit } from '@playwright/test'
import path from 'path'
test("login test",async()=>{
    const browser:Browser=await firefox.launch({headless:false})
   const browsercontext1:BrowserContext=await browser.newContext()
  const page1:Page=await browsercontext1.newPage()
    const email:Locator=await page1.locator("id=firstid")
    const title:string=await page1.title()
    page1.screenshot({path:'home.jpg'})
    expect(title).toEqual("oktitle")
    await browsercontext1.close()
    await browser.close()
    await new Promise(()=>{})

})