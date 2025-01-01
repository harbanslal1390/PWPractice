import{test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'
import { firefox,webkit,chromium } from '@playwright/test'
test('This is my login test',async()=>{
   const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
   const arrayofpages:Page[]=browser.pages()
   const page:Page=arrayofpages[0]
   await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
  // await page.locator("#draggable").dragTo(page.locator("#droppable"))


  await page.locator("#draggable").hover();
  await page.mouse.down()
  await page.locator("#droppable").hover();
  await page.mouse.up()
   await page.waitForTimeout(10000)

})