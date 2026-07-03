import { test, expect, Page, Locator } from "@playwright/test";

export class Blogspot {

    //Readonly Object
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly male: Locator;
    readonly datepicker1: Locator;
    readonly datepicker2: Locator;
    readonly preMonth: Locator;
    readonly aftMonth: Locator;
    readonly selectYear: Locator;
    readonly selectMonth: Locator;
    readonly selectDays: Locator

    //Assign Locators
    constructor(page: Page) {
        this.page = page;
        this.name = page.locator("#name");
        this.email = page.locator("#email");
        this.phone = page.locator("#phone");
        this.male = page.locator("#male");
        this.datepicker1 = page.locator("#datepicker");
        this.datepicker2 = page.locator('[name="SelectedDate"]');
        this.selectYear = page.getByLabel('Select year')
        this.preMonth = page.locator("#ui-datepicker-div a[title='Prev']");
        this.aftMonth = page.locator("#ui-datepicker-div a[title='Next']");
        this.selectMonth = page.getByLabel('Select month');
        this.selectDays = page.locator(".ui-datepicker-calendar tr td");
    }

    //Action Functions
    async navURL(url: string) {
        await this.page.goto(url);
    }
    async fillDetails(name: string, email: string, phone: string) {
        await this.name.fill(name)
        await this.email.fill(email)
        await this.phone.fill(phone)
    }
    async clickMale() {
        await this.male.click();
    }
    async multipleCheckboxes() {
        const labels: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const checkboxes: Locator[] = labels.map(index => this.page.getByLabel(index));
        let c: number = 0;
        for (let checkbox of checkboxes) {

            await checkbox.check();
            c += 1;

        }
        expect(c).toBe(7);
        console.log(c);
    }

    async dropdown() {
        this.page.locator("#country").selectOption({ value: "india" });
        const options: Locator[] = await this.page.locator("#colors").all();
        options.forEach(async (op) => {
            const option = await op.innerText();
            if (option.includes("White")) {
                await op.click();
            }
        })
    }

    async verifyDatePicker(year: string, monthh: string, dayy: string, isPrevious?: boolean) {
        //Approach 1
        await this.datepicker1.fill("01/01/2020");  //(mm/dd/yyyy)

        //Approach 2
        await this.datepicker2.click();
        await this.selectYear.selectOption({ value: year })

        if (isPrevious) {
            while (true) {
                const currentMonth = await this.selectMonth.locator("option:checked").textContent();
                if (currentMonth?.includes(monthh)) {
                    let days: Locator[] = await this.selectDays.all();
                    for (let day of days) {
                        const dayText = await day.innerText();
                        if (dayText.includes(dayy)) {
                            await day.click();
                            break;
                        }
                    }
                    break;
                }
                await this.preMonth.click();
            }
        }
        else{
            while (true) {
                const currentMonth = await this.selectMonth.locator("option:checked").textContent();
                if (currentMonth?.includes(monthh)) {
                    let days: Locator[] = await this.selectDays.all();
                    for (let day of days) {
                        const dayText = await day.innerText();
                        if (dayText.includes(dayy)) {
                            await day.click();
                            break;
                        }
                    }
                    break;
                }
                await this.aftMonth.click();
            }
        }

    }
}  