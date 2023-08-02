import {Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import homePage from '../pageobjects/home.page.js';
import checkoutPage from "../pageobjects/checkout.js";

import { expect } from 'expect-webdriverio'
import { faker } from '@faker-js/faker';

When(/^User login with (\w+) and (.+)$/, async (username, password) => {
    
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
    await homePage.addButtonItemBackpack.click();
    await homePage.addButtonItemBikeLight.click();
    await homePage.basketIcon.click();
});
Then(/^User go to the checkout page/, async () => {
    await checkoutPage.checkoutButton.isDisplayed();
    

});
When(/^User add item and remove item/, async () => {
    await homePage.addButtonItemBackpack.click();
    await homePage.removeButtonItemBackpack.click();

});

Then(/^items is removed/, async () => {
    await expect(homePage.addButtonItemBackpack).toBeDisplayed();
});

Given(/^User is on the checkout page/, async () => {
    await LoginPage.loginWithCr();
    await homePage.addButtonItemBackpack.click();
    await homePage.addButtonItemBikeLight.click();
    await homePage.basketIcon.click();   
    await checkoutPage.checkoutButton.click()
});
When(/^User fill in all customer informations fields/, async () => {
   checkoutPage.checkoutProcess(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode());
  
   
});
Then(/^User should see finish message/, async () => {
    await checkoutPage.finishButton.click();
    await expect(checkoutPage.checkoutMessage).toBeDisplayed();

});
When(/^User add item and click reset App state button/, async () => {
   await homePage.addBackpackItemAndResetApp();

});
Then(/^User can click logout button/, async () => {
    await homePage.menuButton.click();
    await homePage.logoutButton.click();
     
});

Given(/^Standard_user logged in/, async () => {
    await LoginPage.loginWithCr();
});

When(/^User log out from aplication/, async () => {
    await homePage.menuButton.click();
       await homePage.logoutButton.click();

});
Then(/^User display loginBttn/, async () => {
    await LoginPage.loginButton.isDisplayed();
});

Then(/^Item is not selected/, async () => {
    await expect(homePage.addButtonItemBackpack).toBeDisplayed();
});

Then(/^User should see two item in checkout page/, async () => {
   await expect(checkoutPage.cartitem).toBeDisplayed();

});
When(/^User click login button/, async () => {
    await LoginPage.loginButton.click();
});

Then(/^User should see error message/, async () => {
    await expect(LoginPage.errorUsername).toBeDisplayed();
});
When(/^User click all item add button/, async () => {
    await homePage.addAllItem();
});

Then(/^User should see items in cart/, async () => {
    await homePage.basketIcon.click();
    await checkoutPage.cartList.isDisplayed

});