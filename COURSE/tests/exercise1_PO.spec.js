const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashboardPage} = require('../pageobjects/DashboardPage')
const {CartPage} = require('../pageobjects/CartPage')
const {CreditCardPage} = require('../pageobjects/CreditCardPage')
const {OrdersPage} = require('../pageobjects/OrdersPage')

test('Login page successfull',async ({browser}) => {
    let context = await browser.newContext();
    let page =  await context.newPage();
    //let page = "";
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.validLogin();

    
});

//peter@protonmail.com
//Peterpotanos*1




test('Create a new Order to buy a product',async ({browser}) => {
    const context = await browser.newContext();
    const page =  await context.newPage();

    const loginPage = new LoginPage(page);
    
    await loginPage.goTo();
    const email_random = await loginPage.validLogin();

    const dashboardPage = new DashboardPage(page,email_random);
    await dashboardPage.addProductToCart();

    const cartPage = new CartPage(page,email_random);
    await cartPage.checkCartProducts();

    const creditCardPage = new CreditCardPage(page,email_random);
    await creditCardPage.fillingInfoCreditCard();

    const ordersPage = new OrdersPage(page,email_random);
    await ordersPage.checkOrderSuccessfull();
    await ordersPage.openOrderHistory();

});