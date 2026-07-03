
import {test,expect,Locator} from "@playwright/test"

test("Verify Methods",async ({page})=>{

    await page.goto("https://automationexercise.com/")
    let products:Locator=page.locator(".features_items p"); //only traditional loop used
    //console.log("All textContent() :",await products.allTextContents()); //prints all spaces,extra content
    //console.log("All innerText() :",await products.allInnerTexts());    //only prints the plane text

    //1) For Of loop for Locator: We cannot use for of loop directly for locator type instead

    /* let allProducts:Locator[]=await products.all();
     for(let proText of allProducts)
     {
         console.log(await proText.innerText());
     }*/
    
    //2) For in loop
    let allProducts:Locator[]=await products.all();

    for(let i in allProducts)
    {
        console.log(await aallProducts[i].innerText());
    }
    
})