const {test,expect, request} = require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');
const {LoginPage} = require('../pageobjects/LoginPage');



//Intercept a response is a concept related to click on a button or go to a page, and create a MOCK RESPONSE without using the real response to test some specific scenarios.

let token = ""
const fakePayloadOrders = {data:[], message: 'No Orders'}


//test.describe.configure({mode: 'parallel'});
//test.describe.configure({mode: 'serial'});

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext);
    token = await(apiUtils.getToken());
    //console.log("TOKEN: "+token);
    //order_id = await(apiUtils.createOrder());

    //apiContext.post("")
});




test('@Web Intercepting response', async ({page}) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    }, token);

    const orders_button_xpath = page.locator('xpath=//button[@routerlink="/dashboard/myorders"]');

    await page.goto('https://rahulshettyacademy.com/client');
    //let page = "";


    
    //await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/62742549e26b7e1a10e9fce0',
    async route => 
    {
        //await apiRequestContext.dispose();
        //We are going to fetch the response of the URL from page.route, which is 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca'
        //let response_from_route_request = await page.request.fetch(route.request());
        //const response = await route.fetch();
        //const json = await response.json();
        //console.log(json);
        //const response = await page.request.fetch(route.request());

        //const response = await page.request.fetch(route.request());
        //console.log(response);
        let response_from_route_request = await route.fetch();
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
    }


    await (orders_button_xpath).click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/62742549e26b7e1a10e9fce0");
    console.log(await page.locator(".mt-4").textContent());
})




test('Mocking Requests Test', async ({page}) => 
{

    await page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    }, token);


    const orders_button_xpath = page.locator('xpath=//button[@routerlink="/dashboard/myorders"]');
    const order_history_button_xpath = page.locator('xpath=//label[contains(text(),"Orders History")]');
    const order_list_products_xpath = page.locator('xpath=//tr[@class="ng-star-inserted"]/descendant::th')
    // await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',
    // async route => 
    // {
    //     //await apiRequestContext.dispose();
    //     //We are going to fetch the response of the URL from page.route, which is 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca'
    //     //let response_from_route_request = await page.request.fetch(route.request());
    //     //const response = await route.fetch();
    //     //const json = await response.json();
    //     //console.log(json);
    //     //const response = await page.request.fetch(route.request());

    //     const response = await page.request.fetch(route.request());
    //     //console.log(response);
    //     //let response_from_route_request = await route.fetch();
    //     //Fullfill will send a response to browser.
    //     let body = JSON.stringify(fakePayloadOrders);
    //     route.fulfill
    //     (
    //         {
    //             response, 
    //             body,
            
    //         }
    //     );
    //     //Interceting the response - API response -> |||MOCKING RESPONSE HERE (FAKE RESPONSE PUT) ||| -> browser->browser will render data on front end
    // })





    await page.goto('https://rahulshettyacademy.com/client');
    await (orders_button_xpath).click();
    await (page.locator('xpath=//button[contains(text(),"Go Back to Cart")]').waitFor());  

    const order_id = await(page.locator('xpath=//tbody/tr/th')).first().textContent();
    console.log(order_id);

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id='+order_id,
    async route => 
    {
        //await apiRequestContext.dispose();
        //We are going to fetch the response of the URL from page.route, which is 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca'
        
        //SECURITY SCENARIO
        route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca'})
        //route.continue({url: 'https://rahulshettyacademy.com/client'})
        //route.continue({url: 'https://google.com'})
        //console.log("PASSED HERE...")
        //const response = await page.request.fetch(route.request());
        //console.log(response);
        //await page.pause();
        //let response_from_route_request = await route.fetch();
        // let body = JSON.stringify(fakePayloadOrders);

        //Fullfill will send a response to browser.
        // route.fulfill
        // (
        //     {
        //         response, 
        //         body,
            
        //     }
        // );

        //Interceting the response - API response -> |||MOCKING RESPONSE HERE (FAKE RESPONSE PUT) ||| -> browser->browser will render data on front end
    })



    await (page.locator('xpath=//button[contains(text(),"View")]')).first().click();

    const button_view_orders_xpath = page.locator('xpath=//div[contains(text()," View Orders ")]');

    await (page.locator('xpath=//p[contains(text(),"You are not authorize to view this order")]')).waitFor();
    
    await expect(await (page.locator('xpath=//p[contains(text(),"You are not authorize to view this order")]').isVisible())).toEqual(true);

    
    
    // let email_receiver_xpath = page.locator('xpath=//div[contains(text()," Delivery Address ")]/parent::div/descendant::p[1]')

    // await expect (await (email_receiver_xpath).textContent()).toContain(email_random);
    //await (page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca'));

})



test('Aborting Playwright Calls', async ({browser}) => 
{
    const context = await browser.newContext();
    const page =  await context.newPage();
    const username_css = page.locator('css=input[id="username"]');
    const password_css = page.locator('css=input[id="password"]');
    const login_button_css = page.locator('css=input[id="signInBtn"]');
    const products_css = page.locator('css=div[class="card-body"]>h4>a');

    await page.on('request', (request) => {console.log(request.url())});
    await page.on('response', (response) => {console.log('URL:'+response.url()+"-----STATUS: "+response.status())});
    //await page.on('request', async(request) => {console.log(await request.allHeaders())});
    await page.route('**/*.css', (route) => {route.abort();})
    await page.route('**/*.{jpg,png,jpeg,gif,svg}', (route) => {route.abort();})
    await page.route('**/data:image*', (route) => {route.abort();})

    let dashboard_loaded = false;
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //css, xpath
    //type, fill
    await username_css.fill('rahulshettyacademy');
    await password_css.fill('learning');
    await login_button_css.click();
    //await sleep(3000);
    //console.log(page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div').textContent());
    //console.log(await page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div').isVisible())
    //await expect(page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div')).toBeVisible() == false;
    //console.log(await(products_css).nth(0).textContent());
    //console.log(await(products_css).first().textContent());
    //console.log(await(products_css).last().textContent());
    //while(!dashboard_loaded){dashboard_loaded = await(page.locator('xpath=//h1[contains(text(),"Shop Name")]')).isVisible();}
    //
    //await page.waitForLoadState('domcontentloaded');
    //await page.waitForLoadState('networkidle');
    //allTextContents Element won't wait until the element is visible, so it might return an EMPTY array
    
    // await Promise.all(
    //     [
            
    //     page.waitForURL('**\/shop**'),
    //         login_button_css.click()
    //     ]
    //     );
    await page.locator('xpath=//h1[contains(text(),"Shop Name")]').waitFor();
    const allTitles = await products_css.allTextContents();
    console.log(allTitles)
    
    await expect(allTitles).toContain('iphone X')
    await expect(await (page.locator('xpath=//h1[contains(text(),"Shop Name")]'))).toBeVisible() == true;

    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');

    
    //This following approach can be very useful when you have some styles or maybe scripts that take a lot of time to load in the webpage, so you can block them and execute 
    // your testes without any impact in a fast and effectively way.

})




//rahulshetty@gmail.com
//Iamking@000

//anshika@gmail.com
//Iamking@000