import { Locator,Page } from "playwright/test"

export default class HomePage{
    page:Page
    getStartedBtn: Locator
    headingttext: Locator
    hometext: Locator
    searchIcon: Locator
    navmenu: Locator
    constructor(page:any){
        this.page=page,
        this.getStartedBtn=page.locator("#get-started")
        this.headingttext= page.locator('#menu-item-489')
        this.hometext=page.locator("#menu-item-489")
        this.searchIcon=page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']//*[name()='svg']")
       this.navmenu=page.locator("#zak-primary-menu li" )
    }
async pageNavigation()
{
await this.page.goto("https://practice.sdetunicorns.com/")
}
 NavigateAllMenuLinks()
{
    return this.navmenu.allTextContents()
}

}
//we can use 
// export default Homepage;