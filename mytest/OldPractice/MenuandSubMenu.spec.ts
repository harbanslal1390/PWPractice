import{test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'
import { firefox,webkit,chromium } from '@playwright/test'
test("Test menu and submenu",async()=>{
  const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
const arrayofpges:Page[]=browser.pages()
const page:Page=arrayofpges[0]
await page.goto("https://stg-account.flightcentre.com.au/")
await page.hover("div[class='MuiBox-root css-1vyf0gy'] a[title='More']")
await page.getByText("Rail").first().click()
await page.waitForTimeout(10000)
await browser.close()


})
