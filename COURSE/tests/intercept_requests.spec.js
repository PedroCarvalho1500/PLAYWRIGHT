const {test,expect, request} = require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');


//Intercept a response is a concept related to click on a button or go to a page, and create a MOCK RESPONSE without using the real response to test some specific scenarios.

let token = ""
const fakePayloadOrders = {data:[], message: 'No Orders'}

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext);
    token = await(apiUtils.getToken());
    //console.log("TOKEN: "+token);
    //order_id = await(apiUtils.createOrder());

    //apiContext.post("")
});




test.only('Intercepting response', async ({page}) => {
    const orders_button_xpath = page.locator('xpath=//button[@routerlink="/dashboard/myorders"]');

    await page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    }, token);


    await page.goto('https://rahulshettyacademy.com/client');
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca',
    async route => 
    {
        //await apiRequestContext.dispose();
        //We are going to fetch the response of the URL from page.route, which is 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca'
        //let response_from_route_request = await page.request.fetch(route.request());
        //const response = await route.fetch();
        //const json = await response.json();
        //console.log(json);
        //const response = await page.request.fetch(route.request());

        const response = await page.request.fetch(route.request());
        //console.log(response);
        //let response_from_route_request = await route.fetch();
        //Fullfill will send a response to browser.
        let body = JSON.stringify(fakePayloadOrders);
        route.fulfill
        (
            {
                response, 
                body,
            
            }
        );
        //Interceting the response - API response -> |||MOCKING RESPONSE HERE (FAKE RESPONSE PUT) ||| -> browser->browser will render data on front end
    })


    await (orders_button_xpath).click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca");
    console.log(await page.locator(".mt-4").textContent());
})


//anshika@gmail.com
//Iamking@000