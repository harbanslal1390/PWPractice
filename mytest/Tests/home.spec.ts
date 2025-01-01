import{test,expect} from "@playwright/test"
import HomePage from "../Pages/Home.page"

test.describe("Home page test suite",()=>{
    let homepage:HomePage;
    test("Open Home page and verify title",async({page})=>{
        homepage=new HomePage(page)
        //2.------------------Call pageNavigation method from Home.page.ts
//await page.goto("https://practice.sdetunicorns.com/")
homepage.pageNavigation()
await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")
await page.waitForTimeout(5000)


    })
    test("Open About page and verify title",async({page})=>
    {
        //2.------------------Call pageNavigation method from Home.page.ts
        await page.goto("https://practice.sdetunicorns.com/about/")
       await expect(page).toHaveTitle("About – Practice E-Commerce Site")
       await page.waitForTimeout(5000)
    })

    test("Click get started button using CSS selector",async({page})=>{
        homepage=new HomePage(page)
        //2.------------------Call pageNavigation method from Home.page.ts
        //await page.goto("https://practice.sdetunicorns.com/")
        homepage.pageNavigation()
        await expect(page).not.toHaveURL(/.getstarted/);
        //1.---------------------------await page.locator("#get-started").click()------replaced from Home.page.ts
        await homepage.getStartedBtn.click()
        await expect(page).toHaveURL(/.*#get-started/);
        await page.waitForTimeout(5000)
    })
    test("Verify text is visible or not",async({page})=>{
        homepage=new HomePage(page)
        //2.------------------Call pageNavigation method from Home.page.ts
       //await page.goto("https://practice.sdetunicorns.com/")
       homepage.pageNavigation()
        //1.---------------------------await page.locator('text=Think different. Make different.')------replaced from Home.page.ts
       const headingttext= await homepage.headingttext
       await expect(headingttext).not.toBeHidden()
       await expect (headingttext).toBeVisible()
       await page.waitForTimeout(5000)
        
    })
    test("Verify home link is enabled using text and css selector", async ({ page }) => {
        homepage = new HomePage(page);
        await homepage.pageNavigation();
        // Assert that the "Home" link is visible and enabled
        await expect(homepage.hometext).toBeVisible();
        await expect(homepage.hometext).toBeEnabled();
    });

    test("Verify Search Icon is visible using xpath selector",async({page})=>{
        homepage=new HomePage(page)
        //2.------------------Call pageNavigation method from Home.page.ts
        //await page.goto("https://practice.sdetunicorns.com/")
        homepage.pageNavigation()
        //1.---------------------------page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']//*[name()='svg']")------replaced from Home.page.ts
        const SearchIcon=await homepage.searchIcon
        await SearchIcon.click()
        await expect(SearchIcon).toBeEnabled()
        await page.waitForTimeout(5000)
     })

     test("Verify multiple elements",async({page})=>{
        homepage=new HomePage(page)
        //1.---------------------------page.locator("#zak-primary-menu li" )------replaced from Home.page.ts

        var menuarrayitems:string[]=[ 'Home', 'About', 'Shop', 'Blog', 'Contact', 'My account' ]
        //2.------------------Call pageNavigation method from Home.page.ts
        await page.goto("https://practice.sdetunicorns.com/")
        //homepage.pageNavigation()
        const mainmenu=homepage.navmenu
        // await mainmenu.evaluate((el)=>{
        //     el.style.border = '2px solid red'; 
        //     el.style.backgroundColor = 'yellow';
        // })

        const totalitems=await mainmenu.count()
        console.log("There are total "+totalitems+" items in the menu")
        for(var i=0;i<totalitems;i++)
        {
           var menuval=await mainmenu.nth(i).textContent()
           console.log(i +` value is `+menuval)

        }
        console.log(await mainmenu.allTextContents())
    //3.----------------------Replace with NavigateAllMenuLinks method from the Home.Page.ts
        //await expect(await mainmenu.allTextContents()).toEqual(menuarrayitems)
         await expect(await homepage.NavigateAllMenuLinks()).toEqual(menuarrayitems)

        await page.waitForTimeout(5000)
        // if you just want to check one item only for example I want to heck Blog only
        const expectedthirdelement=await mainmenu.nth(3).textContent()
        const actualthirdelement=menuarrayitems[3]
        console.log(expectedthirdelement===actualthirdelement)

        expect(await mainmenu.nth(3).textContent()).toEqual(menuarrayitems[3])

        for(const element of await mainmenu.elementHandles())
        {
            console.log(await element.textContent())
        }


     })


})