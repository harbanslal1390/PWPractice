import{test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'
import { firefox,webkit,chromium } from '@playwright/test'
test("This is mouse click test case",async()=>{
const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
const arraryofpages:Page[]=browser.pages()
const page:Page=arraryofpages[0]
await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

await page.waitForTimeout(3000)
await page.locator("button[ondblclick='myFunction()']").dblclick()
await page.waitForTimeout(3000)
await page.locator(".context-menu-one.btn.btn-neutral").click({button:"right"})
await page.waitForTimeout(3000)
await page.goto("https://the-internet.herokuapp.com/shifting_content")
await page.waitForTimeout(3000)
await page.locator("a[href='/shifting_content/menu']").click({modifiers:["Shift"]})
await page.waitForTimeout(3000)

})