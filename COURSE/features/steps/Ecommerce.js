const {When, Then, Given} = require('@cucumber/cucumber');
const {LoginPage} = require('../../pageobjects/LoginPage');
const {DashboardPage} = require('../../pageobjects/DashboardPage')
const {CartPage} = require('../../pageobjects/CartPage')
const {CreditCardPage} = require('../../pageobjects/CreditCardPage')
const {OrdersPage} = require('../../pageobjects/OrdersPage')
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test')

Given('a login to Ecommerce application with {string} and {string}',{timeout: 30000} ,async function(username, password){
    browser = await playwright.chromium.launch({headless: false,width:1200, height:1200});
    //this.username = username;
    //this.password = password;
    let context = await browser.newContext();
    this.page =  await context.newPage();

    //let page = "";
    this.loginPage = new LoginPage(this.page);

    await this.loginPage.goTo();
    this.email_random = await this.loginPage.validLogin();

    
});

When('add {string} to Cart',{timeout: 30000}, async function(product){
    this.dashboardPage = new DashboardPage(this.page,this.email_random);
    await this.dashboardPage.addProductToCart();

    //await browser.close();
});

Then('Verify {string} is displayed in the Cart',{timeout: 30000}, async function(product){
    this.cartPage = new CartPage(this.page,this.email_random);
    await this.cartPage.checkCartProducts();
});

When('Enter valid details and Place the Order', {timeout: 300000}, async function() {
    this.creditCardPage = new CreditCardPage(this.page,this.email_random);
    await this.creditCardPage.fillingInfoCreditCard();
});


Then('Verify order in preset in the OrderHistory', {timeout: 30000}, async function() {
    this.ordersPage = new OrdersPage(this.page,this.email_random);
    await this.ordersPage.checkOrderSuccessfull();
    await this.ordersPage.openOrderHistory();
    await browser.close();
})