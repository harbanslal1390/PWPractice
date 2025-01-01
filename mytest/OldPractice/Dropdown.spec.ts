import{test,expect,Browser,Page,Locator, firefox, webkit, chromium, BrowserContext} from '@playwright/test'
import { channel } from 'diagnostics_channel'

test("This is dropdown",async()=>{
   const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
   const arrayofpages:Page[]=browser.pages()
   const page:Page=arrayofpages[0]
   await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr")
   const dropddownname='select#Contact_CountryCode'
   //await page.selectOption(dropddownname,{label:'Australia'})
   //await page.selectOption(dropddownname,{value:'AD'})
   //await page.selectOption(dropddownname,{index:4})
   const allelements=await page.$$(dropddownname+">option")
   for(const element of allelements)
   {
    const text=await element.textContent()
    console.log(text)
    if(text==='India')
    {
        await page.selectOption(dropddownname,{label:text})
        break;
    }
   
   }
   
   await page.waitForTimeout(10000)


})
