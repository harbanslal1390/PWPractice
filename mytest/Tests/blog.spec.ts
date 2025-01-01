import {test,expect} from '@playwright/test'
import BlogPage from '../Pages/blog.page'
test.describe("Blog",()=>{
  let blogpage:BlogPage
    test("Verify recent posts counts and verify the length of each list item",async({page})=>{
       // 1.----------------------------------await page.goto("https://practice.sdetunicorns.com/blog")
      blogpage=new BlogPage(page)
      await blogpage.navigate()
       // 2. ---------------------------------const recentpostitems= page.locator("#recent-posts-3>>ul>>li")
       
       const recentpostitems= blogpage.recentpostitems
       //await page.waitForTimeout(5000)
       console.log(await recentpostitems.allTextContents())
       
       for(const el of await recentpostitems.elementHandles())
       {
        console.log(await el.textContent())
       
       }
      for(const el of await recentpostitems.elementHandles())
      {
       
       const beforetrimlengthval= (await el.textContent())?.length
       const aftertrimlength=(await el.textContent())?.trim().length

       console.log("Without trimming the value of the "+await el.textContent()+ "content is "+beforetrimlengthval)
       
       console.log("==========================")
       
       console.log("After trimming the value of the "+(await el.textContent())?.trim()+ "content is "+aftertrimlength)
       console.log("==========================")
        
      }
      
     
        
      
    })
    
})