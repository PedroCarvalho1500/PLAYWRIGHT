const {test,expect, request} = require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');

let webContextByPassedLogin;


test.beforeAll(async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');


    const email_field_css = page.locator('css=#userEmail');
    const password_field_css = page.locator('css=#userPassword');
    const login_button_css = page.locator('css=input[value="Login"]')



    await expect(login_button_css).toBeVisible() == true
    await email_field_css.fill("anshika@gmail.com");
    await password_field_css.fill("Iamking@000");
    await login_button_css.click({ force: true });
    await (page.locator('xpath=//div[@class="d-flex flex-row mb-2"]/descendant::label')).waitFor();
    await context.storageState({path: 'state.json'})
    await page.close();
    webContextByPassedLogin = await browser.newContext({storageState: 'state.json'})

    

    //apiContext.post("")
});


//Login UI
// test, cart-order, orderdetails, oderhistory

test('API Integration Part 2',async ({browser}) => {
    //const context = await browser.newContext();
    const page =  await webContextByPassedLogin.newPage();
    await page.goto('https://rahulshettyacademy.com/client');


    const message_products_dashboard_xpath = page.locator('xpath=//div[@class="d-flex flex-row mb-2"]/descendant::label');
    const products_list = page.locator('xpath=//h5/b');

    
    await (message_products_dashboard_xpath).waitFor();
    console.log(await(products_list).first().textContent());
    console.log(await (products_list).allTextContents());
    
    
    console.log(await (message_products_dashboard_xpath).textContent());
    await expect(await (message_products_dashboard_xpath).textContent()).toContain(" User can only see maximum 9 products on a page");

});