import{expect,test}from "@playwright/test"
test.describe("This is my test suite",()=>{
    test("Home page with assertions",async({page})=>{
        await page.goto("https://practice.sdetunicorns.com")
       
        await expect.soft(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")

    })
    test("Contact page test with assertions",async({page})=>{
        await page.goto("https://practice.sdetunicorns.com/contact/")
        await page.locator("[name='everest_forms[form_fields][ys0GeZISRs-1]']").fill("Ram")
        //await expect(page).toHaveTitle("Contact – Practice E-Commerce Sit")
        await expect.soft(page).toHaveTitle("Contact – Practice E-Commerce Sit")
        expect(test.info().errors.length).toBeLessThan(1);
        await page.goto("https://practice.sdetunicorns.com/contact/")

        await page.waitForTimeout(10000)
        await page.locator("[name='everest_forms[form_fields][ys0GeZISRs-1]']").waitFor({state:'visible',timeout:10000})
        await expect(page.locator("[name='everest_forms[form_fields][ys0GeZISRs-1]']")).toBeVisible({timeout:10000})
        await expect(page.locator("[name='everest_forms[form_fields][ys0GeZISRs-1]']")).toHaveText("checktext",{timeout:10000})
        await expect(page).toHaveTitle("title of the page",{timeout:10000})
        await expect(page.locator("[name='everest_forms[form_fields][ys0GeZISRs-1]']")).toHaveText("checktext",{timeout:10000})
        await expect(page.locator("[name='everest_forms[form_fields][ys0GeZISRs-1]']")).toContainText("oktext",{timeout:10000})
        await expect(page.locator("locator")).toHaveText('hello', { timeout: 10_000 });
        
        

    })
})