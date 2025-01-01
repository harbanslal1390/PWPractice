import{test,expect,Browser,Page,Locator,webkit,firefox,chromium, BrowserContext} from '@playwright/test'
import { channel } from 'diagnostics_channel';

test("This is login testcase",async()=>{
 //const browser:Browser=await firefox.launch({headless:false})
 //const browser:BrowserContext= await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})


const browser:BrowserContext=await firefox.launchPersistentContext('',{headless:false})
const arrayofpages:Page[]=browser.pages()
const page:Page=arrayofpages[0]

 //const page:Page=await browser.newPage()
 page.goto("https://stg-account.flightcentre.com.au/")
 const locator:Locator=await page.locator("input#email")
 await locator.fill("Harbans.lal@flightcentre.com")
 await page.locator("button[data-testid='PrimaryButton']").click()
 await page.waitForTimeout(10000)
 await browser.close()
 
})
