import Page from './page.ts';
class HomePage extends Page {
    public get titleProducts() {
        return $('//*[.="Products"]')
    }

    public get errorMessage() {
        return $('[data-test="error"]')
    }

    public get menuButton() {
        return $('//button[@id="react-burger-menu-btn"]')
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

    // methods
    async open(){
        await super.open("/");
    }
    public async addBackpackItemAndResetApp() {
        await this.addButtonItemBackpack.click();
        await this.menuButton.click();
        await this.resetAppStateButton.click();
    }
    public async addAllItem(){
        await this.addButtonItemBackpack.click();
        await this.addButtonItemBikeLight.click();
        await this.addButtonJacket.click();
        await this.addButtonOnesie.click();
        await this.addButtonTshirt.click();
    }
    public async logOut() {
       await this.menuButton.click();
       await this.logoutButton.click();

    }
    public async resetApp() {
       
        await this.menuButton.click();
        await this.resetAppStateButton.click();
    }
}
export default new HomePage();