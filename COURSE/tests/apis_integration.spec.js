const {test,expect, request} = require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');



let token = ""
let order_id = ""

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext);
    token = await(apiUtils.getToken());
    console.log("TOKEN: "+token);
    order_id = await(apiUtils.createOrder());

    //apiContext.post("")
});


test.only('API Integration Bypass and creating order',async ({browser}) => {
    const context = await browser.newContext();
    const page =  await context.newPage();

    const orders_button_xpath = page.locator('xpath=//button[@routerlink="/dashboard/myorders"]');
    const order_list_products_xpath = page.locator('xpath=//tr[@class="ng-star-inserted"]/descendant::th');
    let dashboard_loaded = false;

    await page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    }, token);
    await page.goto('https://rahulshettyacademy.com/client');


    await (orders_button_xpath).click();


    console.log("ALL ORDERS NUMBERS: ");
    console.log(await (order_list_products_xpath).allTextContents());
    await expect(await (order_list_products_xpath).allTextContents()).toContain(order_id)

    const view_order_button_xpath = page.locator('xpath=//th[contains(text(),"'+order_id+'")]/parent::tr/descendant::button[contains(text(),"View")]');

    await (view_order_button_xpath).click();

    const button_view_orders_xpath = page.locator('xpath=//div[contains(text()," View Orders ")]');
    await (button_view_orders_xpath).waitFor();

    let email_receiver_xpath = page.locator('xpath=//div[contains(text()," Delivery Address ")]/parent::div/descendant::p[1]')

    await expect (await (email_receiver_xpath).textContent()).toContain("anshika@gmail.com");
});


//anshika@gmail.com
//Iamking@000