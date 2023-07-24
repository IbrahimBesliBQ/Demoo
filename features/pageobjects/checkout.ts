class CheckoutPage {
    public firstname = "";
    public get checkoutButton() {
        return $('#checkout')
    }

    public get firstName() {
        return $('#first-name')
    }

    public get lastName() {
        return $('#last-name')
    }

    public get zipPostalCode() {
        return $('#postal-code')
    }

    public get continueButton() {
        return $('#continue')
    }

    public get finishButton() {
        return $('#finish')
    }

    public get checkoutOverviewTitle(){
        return $('.title')
    }
    
    public get completedOrderMessage(){
        return $('//*[.="THANK YOU FOR YOUR ORDER"]')
    }

    public get totalAmountField(){
        return $('.summary_total_label')
    }

    public get errorMessage(){
        return $('.error-message-container')
    }
    public async checkoutProcess(firstName: string, lastName: string, postalCode: string){
(await this.firstName).setValue(firstName);
(await this.lastName).setValue(lastName);
(await this.zipPostalCode).setValue(postalCode);
    }  
}
export default new CheckoutPage();
