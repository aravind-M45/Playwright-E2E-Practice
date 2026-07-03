import {test,expect, Page} from "@playwright/test"

let page:Page;
test.beforeAll('Navigate to Application',async ({browser})=>{
    page=await browser.newPage();
    await page.goto('https://cx-qa-app.curvolabs.com/');
})
test.beforeEach("Login with Valid Credientials",async ()=>{
    
    await page.goto('https://cx-qa-app.curvolabs.com/');
    await page.getByPlaceholder("Username or email address").fill('qualitlabs+2@curvolabs.com');
    await page.getByRole('button',{name:'action'}).click();
    await page.getByRole('textbox',{name:'password'}).fill('QualiTlabs*1');
    await page.getByRole('button',{name:'action'}).click();
    await expect(page).toHaveTitle('Curvo');
    
})

test.afterAll('Close the Application',async ()=>{
    await page.close();
})