
import {test,expect} from '@playwright/test'
import { Test01 } from '../pages/testcase01.page';

test("Testcase_01 PageObjectModal",async ({page})=>{
    const obj=new Test01(page);
    await obj.navLoginPage();
    await obj.enterUsername(`${process.env.DEMOBLAZE_USERNAME}`);
    await obj.enterPassword(`${process.env.DEMOBLAZE_PASSWORD}`);
    await obj.clickLoginButton();
    await obj.verifyDetails();
    await obj.clickLogout();
})