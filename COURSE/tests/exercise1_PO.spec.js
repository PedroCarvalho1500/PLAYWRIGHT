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




test.only('Create a new Order to buy a product',async ({browser}) => {
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

    const ordersPage = new OrdersPage(page);
    await ordersPage.checkOrderSuccessfull();



    


    // await (order_history_button_xpath).click();



    // await (page.locator('xpath=//button[contains(text(),"Go Back to Cart")]').waitFor());        
    
    // console.log("ALL ORDERS NUMBERS: ");
    // console.log(await (order_list_products_xpath).allTextContents());
    // await expect(await (order_list_products_xpath).allTextContents()).toContain(order_number_finished)

    // const view_order_button_xpath = page.locator('xpath=//th[contains(text(),"'+order_number_finished+'")]/parent::tr/descendant::button[contains(text(),"View")]');

    // await (view_order_button_xpath).click();

    // const button_view_orders_xpath = page.locator('xpath=//div[contains(text()," View Orders ")]');
    // await (button_view_orders_xpath).waitFor();

    // let email_receiver_xpath = page.locator('xpath=//div[contains(text()," Delivery Address ")]/parent::div/descendant::p[1]')

    // await expect (await (email_receiver_xpath).textContent()).toContain(email_random);
});