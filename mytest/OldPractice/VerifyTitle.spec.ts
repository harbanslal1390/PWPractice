import{test,expect,Browser,Page,Locator} from '@playwright/test'
import { firefox,chromium,webkit } from '@playwright/test'
test("This is title check case",async({page})=>{
    await page.goto("https://stg-account.flightcentre.com.au/")
    await expect(page).toHaveTitle("Account | Flight Centre")
    //await expect(page).toHaveTitle("Account | Flight Centre1")
    // If we want to check only substring 
    await expect(page).toHaveTitle(/Account/)
 
    await expect(page.getByRole('button',{name:'Continue'})).toBeVisible()
  
    await page.screenshot({path:"verifyTilte.png",fullPage:true})
    await page.screenshot({path:"verifyTilte1.png",fullPage:true})
    await page.waitForTimeout(6000)
    await page.close()





})