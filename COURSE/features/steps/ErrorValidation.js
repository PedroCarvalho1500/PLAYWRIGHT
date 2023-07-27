const {When, Then, Given} = require('@cucumber/cucumber');
const {LoginPage} = require('../../pageobjects/LoginPage');
const {DashboardPage} = require('../../pageobjects/DashboardPage')
const {CartPage} = require('../../pageobjects/CartPage')
const {CreditCardPage} = require('../../pageobjects/CreditCardPage')
const {OrdersPage} = require('../../pageobjects/OrdersPage')
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test')



Given('login to Ecommerce2 application with {string} and {string}',{timeout: 30000}, async function(username,password){
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await this.page.locator('css=input[id="username"]').type(username);
    await this.page.locator('css=input[id="password"]').type(password);
    await this.page.locator('css=input[id="signInBtn"]').click();

});

Then('Verify Error message is displayed',{timeout: 30000}, async function(){
    await expect(this.page.locator('css=div[style*="block"]')).toBeVisible() == true;
    await expect(await this.page.locator('css=div[style*="block"]').textContent()).toEqual("Incorrect username/password.");
});