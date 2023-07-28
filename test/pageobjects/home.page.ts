import Page from './page.ts';
class HomePage extends Page {
    public get titleProducts() {
        return $('//*[.="Products"]')
    }

    public get errorMessage() {
        return $('[data-test="error"]')
    }

    public get menuButton() {
        return $('.bm-burger-button')
    }

    public get logoutButton() {
        return $('#logout_sidebar_link')
    }

    public get resetAppStateButton() {
        return $('#reset_sidebar_link')
    }

    public get addButtonItemBackpack() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    public get removeButtonItemBackpack() {
        return $('#remove-sauce-labs-backpack')
    }

    public get addButtonItemBikeLight() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    public get addButtonTshirt() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    public get addButtonJacket() {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }
    public get addButtonOnesie() {
        return $('#add-to-cart-sauce-labs-onesie')
    }
    public get addButtonTshirtRed() {
        return $('#add-to-cart-test.allthethings()-t-shirt-(red)')
    }
 

    public get basketIcon() {
        return $('.shopping_cart_link')
    }

    public get shoppingCardBadget() {
        return $('.shopping_cart_badge')
    }

    public get goToProductBackpackPage() {
        return $('//div[.="Sauce Labs Backpack"]')
    }

    public get itemPriceBackpack() {
        return $('.inventory_item:nth-child(1) .inventory_item_price')
    }

    public get itemPriceBikeLight() {
        return $('.inventory_item:nth-child(2) .inventory_item_price')
    }
    // methods
    override async open(): Promise<void>{
        await super.open("/inventory.html");
    }
    public async addBackpackItemAndResetApp() {
        await this.addButtonItemBackpack.click();
        await  this.menuButton.click();
        await this.resetAppStateButton.click();
    }
}
export default new HomePage();