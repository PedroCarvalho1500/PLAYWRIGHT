const {test,expect} = require('@playwright/test');


function generate_random_email(){
    return (Math.random() + 1).toString(36).substring(7) + "@prontonmail.com";
}

test('Create a new Order to buy a product',async ({browser}) => {
    const context = await browser.newContext();
    const page =  await context.newPage();

    const register_button_xpath = page.locator('xpath=//a[contains(text(),"Register here")]');
    const firstNameField_css = page.locator('css=#firstName');
    const lastNameField_css = page.locator('css=#lastName');
    const emailField_css = page.locator('css=#userEmail');
    const mobileField_css = page.locator('css=#userMobile');
    const passwordRegisterField_css = page.locator('css=#userPassword');
    const confirmPasswordRegisterField_css = page.locator('css=#confirmPassword');
    const i_am_18_css = page.locator('css=input[type="checkbox"]');
    const register_button_css = page.locator('css=input[value="Register"]');
    const email_random = generate_random_email();
    const email_field_css = page.locator('css=#userEmail');
    const password_field_css = page.locator('css=#userPassword');
    const login_button_css = page.locator('css=input[value="Login"]')
    let dashboard_loaded = false;
    //const message_products_dashboard_xpath = page.locator('xpath=//label[contains(text()," User can only see maximum 9 products on a page")]');
    const message_products_dashboard_xpath = page.locator('xpath=//div[@class="d-flex flex-row mb-2"]/descendant::label');
    const products_list = page.locator('xpath=//h5/b');
    const sign_out_button_xpath = page.locator('xpath=//button[contains(text(),"Sign Out")]');
    const product_iphone13_pro_add_to_cart_xpath = page.locator('xpath=//b[contains(text(),"iphone 13 pro")]/parent::h5/parent::div/descendant::button[contains(text(),"Add To")]');
    const cart_button_xpath = page.locator('xpath=//button[@routerlink="/dashboard/cart"]');
    const successfull_added_to_the_cart_xpath = page.locator('xpath=//div[@id="toast-container"]');
    const cart_elements_list_xpath = page.locator('xpath=//h3/parent::div[@class="cartSection"]/descendant::h3');
    const order_number = page.locator('xpath=//h3[contains(text(),"iphone 13")]/parent::div/descendant::p[@class="itemNumber"]');
    const checkout_button_xpath = page.locator('xpath=//button[contains(text(),"Checkout")]');
    const email_to_buy_css = page.locator('css=input[class*="input txt text-validated n"]');
    const current_email_xpath = page.locator('xpath=//div[@class="details__user"]/descendant::div/descendant::label');
    const cvv_code_field_xpath = page.locator('xpath=//div[contains(text(),"CVV")]/following::input[1]');
    const country_field_xpath = page.locator('xpath=//div[@class="user__address"]/descendant::div/descendant::input');
    const coupon_field_css = page.locator('css=input[name="coupon"]');
    const coupon_value = "rahulshettyacademy";
    const apply_coupon_button_xpath = page.locator('xpath=//button[contains(text(),"Coupon")]');
    const coupon_applied_xpath = page.locator('xpath=//p[contains(text(),"Applied")]');
    const place_order_button_xpath = page.locator('xpath=//a[contains(text(),"Place Order")]');
    const name_on_card_field_xpath = page.locator('xpath=//div[contains(text(),"Name on Card ")]/parent::div/descendant::input');
    const succesfull_ordered_xpath = page.locator('xpath=//h1[contains(text(),"Thankyou")]');
    const order_history_button_xpath = page.locator('xpath=//label[contains(text(),"Orders History")]');
    const order_list_products_xpath = page.locator('xpath=//tr[@class="ng-star-inserted"]/descendant::th')


    await page.goto('https://rahulshettyacademy.com/client');
    await register_button_xpath.click();
    await firstNameField_css.fill('Peter');
    await lastNameField_css.fill('Test');
    await emailField_css.fill(email_random);
    await mobileField_css.fill('9999989834');
    await passwordRegisterField_css.fill('Peterpotanos*1');
    await confirmPasswordRegisterField_css.fill('Peterpotanos*1');
    await i_am_18_css.click();
    await register_button_css.click();
    await page.locator('xpath=//button[contains(text(),"Login")][@tabindex="0"]').first().click();
    await expect(login_button_css).toBeVisible() == true
    await email_field_css.fill(email_random);
    await password_field_css.fill("Peterpotanos*1");
    await login_button_css.click({ force: true });



    await (message_products_dashboard_xpath).waitFor();
    console.log(await(products_list).first().textContent());
    console.log(await (products_list).allTextContents());
    
    console.log(await (message_products_dashboard_xpath).textContent());
    await expect(await (message_products_dashboard_xpath).textContent()).toContain(" User can only see maximum 9 products on a page");
    await expect(sign_out_button_xpath).toBeVisible() == true;

    await(product_iphone13_pro_add_to_cart_xpath).click();
    await expect(await(successfull_added_to_the_cart_xpath)).toBeVisible() == true

    await (cart_button_xpath).click();

    await (checkout_button_xpath).waitFor();
    await expect(await(checkout_button_xpath)).toBeVisible();
    //await (cart_elements_list_xpath).waitFor();
    console.log(await(cart_elements_list_xpath).first().allTextContents());
    await expect(await(cart_elements_list_xpath).first().allTextContents()).toContain('iphone 13 pro');
    console.log(await(order_number).textContent());

    await (checkout_button_xpath).click();
    await (current_email_xpath).waitFor();

    console.log(await(current_email_xpath).textContent());
    await expect(await(current_email_xpath).textContent()).toEqual(email_random);
    
    await (cvv_code_field_xpath).fill('655');
    await (country_field_xpath).click();
    await (country_field_xpath).type("B");
    await (country_field_xpath).type("r");
    await (country_field_xpath).type("a");
    await (country_field_xpath).type("z");
    while(page.locator('css=section[class*="ta-results list-group"]').isVisible() == false)
    {
        await (page.keyboard.press('Enter'));
    }
    
    //await (page.locator('css=section[class*="ta-results list-group"]').waitFor());
    //await expect(await (page.locator('css=section[class*="ta-results list-group"]'))).toBeVisible() == true;
    await (page.locator('xpath=//span[contains(text(),"Brazil")]').click());
    await (coupon_field_css).fill(coupon_value);
    await (apply_coupon_button_xpath).click();

    await (coupon_applied_xpath).waitFor();
    await expect (await(coupon_applied_xpath)).toBeVisible() == true;

    await (name_on_card_field_xpath).fill("MY_NAME");
    await (place_order_button_xpath).click();

    await (succesfull_ordered_xpath).waitFor();
    await expect(succesfull_ordered_xpath).toBeVisible() == true;

    
    let order_number_finished = await(page.locator('xpath=//label[@class="ng-star-inserted"]')).textContent();
    order_number_finished = order_number_finished.replace(" ", "").replace("|", "").replace(" |", "");
    order_number_finished = order_number_finished.trim();
    console.log("ORDER_NUMBER"+order_number_finished);

    await (order_history_button_xpath).click();



    await (page.locator('xpath=//button[contains(text(),"Go Back to Cart")]').waitFor());        
    
    console.log("ALL ORDERS NUMBERS: ");
    console.log(await (order_list_products_xpath).allTextContents());
    await expect(await (order_list_products_xpath).allTextContents()).toContain(order_number_finished)

    const view_order_button_xpath = page.locator('xpath=//th[contains(text(),"'+order_number_finished+'")]/parent::tr/descendant::button[contains(text(),"View")]');

    await (view_order_button_xpath).click();

    const button_view_orders_xpath = page.locator('xpath=//div[contains(text()," View Orders ")]');
    await (button_view_orders_xpath).waitFor();

    let email_receiver_xpath = page.locator('xpath=//div[contains(text()," Delivery Address ")]/parent::div/descendant::p[1]')

    await expect (await (email_receiver_xpath).textContent()).toContain(email_random);
});

//peter2@protonmail.com
//12345678*1Aa