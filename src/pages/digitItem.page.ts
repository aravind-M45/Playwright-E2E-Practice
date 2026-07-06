import { Page, Locator} from "@playwright/test"

export class DigitItemPage {

    readonly page:Page;
    readonly navItem:Locator;
    readonly newItem:Locator;
    readonly inventoryItem:Locator;
    readonly itemName:Locator;
    readonly defaultStockUoMDropdown:Locator;
    readonly uom:Locator;
    readonly saveButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.navItem=page.getByRole('button', { name: 'Items' })
        this.newItem=page.getByRole('button', { name: 'New item' })
        this.inventoryItem=page.getByText('Inventory item', { exact: true })
        this.itemName=page.getByRole('textbox', { name: 'Name' })
        this.defaultStockUoMDropdown=page.getByRole('combobox', { name: 'Default stock UoM' })
        this.uom=page.getByRole('option', { name: 'Each (ea)' })
        this.saveButton=page.getByRole('button', { name: 'Save', exact: true })
    }

    async navigateToItemPage(){
        await this.navItem.click();
    }    

    async selectInventoryItem(){
        await this.newItem.click();
        await this.inventoryItem.click();
    }

    async enterItemName(name:string){
        await this.itemName.pressSequentially(name);
    }

    async selectUOM(){
        await this.defaultStockUoMDropdown.click();
        await this.uom.click();
    }

    async saveItem(){
        await this.saveButton.click();
    }
}