import{test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'
import { firefox,chromium,webkit } from '@playwright/test'
import { basename } from 'path'
test("This is basicauth case",async()=>{
    const browser:Browser=await firefox.launch({headless:false})
    const browsercontext1:BrowserContext=await browser.newContext()
    const page:Page=await browsercontext1.newPage()
       const username:string='admin'
    const password:string='admin'
    page.setExtraHTTPHeaders({Authorization:getauthorization(username,password)})
    await page.goto("https://www.google.com")
    const locator:Locator=await page.locator("id=idofemail")
    await browsercontext1.close()
    await browser.close()
    new Promise(()=>{})

})

const getauthorization=(username:string,password:string)=>{
    console.log("Basic "+btoa(username+':'+password))

    return ("Basic "+btoa(username+':'+password))

}