import{test,expect} from '@playwright/test'
test.describe("home",()=>{
test("login page",async({page})=>{
   await page.goto("https://www.google.com") 
 })
})
test.describe('', () => {
    test('OK', async ({ page }) => {
        await page.goto("https://www.google.com") 
    })
    
    
})
