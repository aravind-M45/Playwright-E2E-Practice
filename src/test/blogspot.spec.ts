
import {test,expect,Page} from "@playwright/test";
import { Blogspot } from "../pages/blogspot.page";

let page:Page;
let obj:Blogspot;

test.beforeEach("Runs before each test",async ({browser})=>{
    page=await browser.newPage();
    obj=new Blogspot(page);
    await obj.navURL("https://testautomationpractice.blogspot.com/");
})

test("testcase_02 Verify Checkboxes",async ()=>{

    await obj.fillDetails("Aravind","email@gmail.com","99122");
    await obj.clickMale();
    await obj.multipleCheckboxes();
})

test("testcase_03 verify Drop-downs",async ()=>{
    await obj.dropdown();
})  

test.only("testcase_04 verify Datepicker",async ()=>{
    await obj.verifyDatePicker('2017','Oct','19',false);
})

test.afterEach("",async()=>{
   await page.waitForTimeout(5000);
})