import{expect, test} from '@playwright/test'
import { request } from 'http'
test("This is Get request",async({request})=>{
    const response=await request.get("https://restful-booker.herokuapp.com/booking")
   console.log(await response.json())

})

test.describe("Api suite",()=>{
    test("This is checking ",async({request})=>{
        const jsonsrepsonse=await request.get("https://restful-booker.herokuapp.com/booking")
        console.log(jsonsrepsonse)
    })
    test.describe("Api suite",()=>{
        test("This is checking ",async({request})=>{
            const jsonsrepsonse=await request.get("https://restful-booker.herokuapp.com/booking")
            console.log(jsonsrepsonse)
            console.log(jsonsrepsonse.status())
            expect(jsonsrepsonse.status()).toBe(200)
           const responsebody=await jsonsrepsonse.json()
           console.log(responsebody[0])
           console.log(responsebody[0].bookingid)
            
        })
    })
})