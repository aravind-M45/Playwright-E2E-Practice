import {Page,expect,Locator} from "@playwright/test"

export class Test01{
    readonly page:Page;
    readonly clickLogin:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly assert01:Locator;
    readonly assert02:Locator;
    readonly logout:Locator;

    //Assign locator to readonlyObjects
    constructor(page:Page)
    {
        this.page=page;
        this.clickLogin=page.getByRole('link', { name: 'Log in' });
        this.username=page.locator('#loginusername');
        this.password=page.locator("#loginpassword");
        this.loginButton=page.getByRole('button',{name:'Log in'});
        this.assert01=page.getByRole('link', { name: 'PRODUCT STORE' });
        this.assert02=page.locator('#logout2');
        this.logout=page.getByRole('link', { name: 'Log out' });
    }

    //Actions
    async navLoginPage()
    {
        await this.page.goto(`${process.env.DEMOBLAZE_URL}`);
        await this.clickLogin.click();
    }

    async enterUsername(name:string)
    {
        await this.username.fill(name);
    }
    async enterPassword(pass:string)
    {
        await this.password.fill(pass);
    }
    
    async clickLoginButton()
    {
        await this.loginButton.click();
    }

    async verifyDetails()
    {
        await expect(this.assert01).toBeVisible();
        await expect(this.assert02).toContainText('Log out');
    }

    async clickLogout()
    {
        await this.logout.click();
    }
}