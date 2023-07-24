import {Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import homePage from '../pageobjects/home.page.js';
import checkoutPage from "../pageobjects/checkout.js";
import itemPage from "../pageobjects/item.page.js"
import { expect } from 'expect-webdriverio'
import { faker } from '@faker-js/faker';

When(/^User login with (\w+) and (.+)$/, async (username, password) => {
    
    //await loginPage.login(username, password);
    await LoginPage.login(username,password);
});

Then(/^User is logged in/, async () => {
    await expect(homePage.titleProducts).toBeDisplayed();
});
When(/^User login with invalid (\w+) and invalid (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});
Then(/^User is not logged in/, async () => {
    await expect(LoginPage.errorText).toBeDisplayed();
});
Given(/^User is the home page/, async () => {
    await LoginPage.loginWithCr();
});
When(/^User buy two items/, async () => {
    (await homePage.addButtonItemBackpack).click();
    (await homePage.addButtonItemBikeLight).click();
    (await homePage.basketIcon).click();
    

});
Then(/^User go to the checkout page/, async () => {
    (await checkoutPage.checkoutButton).isDisplayed()

});
When(/^User add item and remove item/, async () => {
    (await homePage.addButtonItemBackpack).click();
    (await homePage.removeButtonItemBackpack).click();
});
Then(/^items is removed/, async () => {
    (await homePage.removeButtonItemBackpack).isDisplayed()

});

Given(/^User is on the checkout page/, async () => {
    await LoginPage.loginWithCr();
    await homePage.addButtonItemBackpack.click();
    await homePage.addButtonItemBikeLight.click();
    (await homePage.basketIcon).click();   
    (await checkoutPage.checkoutButton).click()
});
When(/^User fill in all customer informations fields/, async () => {
   checkoutPage.checkoutProcess(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode());
    (await checkoutPage.continueButton).click();
});
Then(/^User should see finish button/, async () => {
    (await checkoutPage.finishButton).isDisplayed()

});
Given(/^User is on the home page and add item a card/, async () => {
    await LoginPage.loginWithCr();
    (await homePage.addButtonItemBackpack).click();
});
When(/^User click reset App state button/, async () => {
   await expect(homePage.shoppingCardBadget).toBeDisplayed();
    (await homePage.resetAppStateButton).click();
    
 
});
Then(/^User can succesfull logout/, async () => {
    (await homePage.logoutButton).click();
     (await LoginPage.loginButton).isDisplayed();
});
