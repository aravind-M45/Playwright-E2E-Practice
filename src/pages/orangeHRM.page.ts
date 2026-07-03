import {Locator, Page} from "@playwright/test"
export class orangeHRMPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly page: Page;

    //Locators Assignment
    constructor(page:Page){
        this.page=page;
        this.username=page.getByPlaceholder("Username")
        this.password=page.getByPlaceholder("Password")
        this.loginButton=page.getByRole("button", { name: "Login" })
    }

    //Action menhods

    async navURL(url:string){
        this.page.goto(url);
    }
    async fillusername(username:string){
        await this.username.fill(username)
    }
    async fillpassword(password:string){
        await this.password.fill(password)
    }
    async clickLoginButton(){
        await this.loginButton.click()
    }
}
