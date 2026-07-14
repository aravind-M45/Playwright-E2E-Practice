
import {test} from "../fixtures/TestFixtures";

test("Testcase_01 PageObjectModal",async ({page,testObj})=>{
    await testObj.navLoginPage();
    await testObj.enterUsername(`${process.env.DEMOBLAZE_USERNAME}`);
    await testObj.enterPassword(`${process.env.DEMOBLAZE_PASSWORD}`);
    await testObj.clickLoginButton();
    await testObj.verifyDetails();
    await testObj.clickLogout();
})