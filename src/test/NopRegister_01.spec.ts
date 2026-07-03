

import {test,expect} from "@playwright/test"
import { Register } from "../pages/NopRegister.page"

test("testcase_01 Verify Successfull Registration using valid credientials",async ({page})=>{

    const obj=new Register(page);
    await obj.navURL("https://demo.nopcommerce.com/"); 
    await obj.goToRegister();
    await obj.fillDetails("Aravind","SDET","sdet01@gmail.com","Aravind@123","Aravind@123");
    await obj.clickRegister();
    await obj.verifyMessage();
    await obj.clickContinue();
    await obj.verifyLogin();
})