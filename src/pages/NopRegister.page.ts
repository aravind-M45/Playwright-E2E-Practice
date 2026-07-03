import {test,Locator,Page,expect} from "@playwright/test"

export class Register{

    //readonly URL:string;
    readonly page:Page;
    readonly navRegister:Locator;
    readonly male:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly confirmPassword:Locator;
    readonly registerButton:Locator;
    readonly verifyStatus:Locator;
    readonly continueButton:Locator;
    readonly verifyHeading:Locator;

    //Assigning all the Locators
    constructor(page:Page){
        this.page= page
        this.navRegister=page.locator(".ico-register");
        this.male = page.locator('#gender-male'); 
        this.firstName=page.getByLabel('First name');
        this.lastName=page.getByLabel('Last name');
        this.email=page.getByLabel('Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton=page.getByRole('button',{name:"Register"});
        this.verifyStatus=page.getByText('Your registration completed');
        this.continueButton=page.getByText('CONTINUE');
        this.verifyHeading=page.getByText('Welcome to our store');
    }

    //Action Functions
    async navURL(url:string)
    {
        await this.page.goto(url,{waitUntil:'domcontentloaded'});
    }   

    async goToRegister()
    {
        await this.navRegister.click();
        await this.page.waitForSelector('#gender-male');
    }

    async fillDetails(firstName:string,lastName:string,email:string,pass:string,confirmPass:string)
    {
        await this.male.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(pass);
        await this.confirmPassword.fill(confirmPass);
    }

    async clickRegister()
    {
        await this.registerButton.click();
    }
    async verifyMessage()
    {
        await expect(this.verifyStatus).toContainText("Your registration completed");
    }

    async clickContinue()
    {
        await this.continueButton.click();
    }

    async verifyLogin()
    {
        await expect(this.verifyHeading).toBeVisible();
    }
}