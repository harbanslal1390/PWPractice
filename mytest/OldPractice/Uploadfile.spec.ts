import{test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'
import { firefox,webkit,chromium } from '@playwright/test'

test("login",async()=>{
    const browser:BrowserContext= await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
    const arrayofpages:Page[]=browser.pages()
    const page:Page=arrayofpages[0]
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")
    
    await page.waitForTimeout(10000)

})

