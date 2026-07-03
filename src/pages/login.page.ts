import { Page,Locator,expect } from "@playwright/test";

export class LoginPage{

    
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginButton;

    //Assign Locators 
    constructor(page:Page)
    {
        this.page=page;
        this.username=page.getByRole('textbox',{name:'username'})
        this.password=page.getByRole('textbox',{name:'password'})
        this.loginButton=page.getByRole('button',{name:'login'})
    }

    //Action-----
    async enterUName(uname:string)
    {
        await this.username.fill(uname);
    }

    async enterPassword(pass: string)
    {
        await this.password.fill(pass);
    }

    async clickLoginButton()
    {
        await this.loginButton.click();
    }

    async verifyUrl()
    {
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await this.page.screenshot({path:'screenshots/validLogin.png',fullPage:true})
    }
}