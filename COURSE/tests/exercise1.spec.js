const {test,expect} = require('@playwright/test');


function generate_random_email(){
    return (Math.random() + 1).toString(36).substring(7) + "@prontonmail.com";
}

test('Login page successfull',async ({browser}) => {
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


    //while(dashboard_loaded == false)
    //{
    //    dashboard_loaded = await(message_products_dashboard_xpath).isVisible();
    //}
    //await page.waitForLoadState('networkidle');
    await (message_products_dashboard_xpath).waitFor();
    console.log(await(products_list).first().textContent());
    console.log(await (products_list).allTextContents());
    
    console.log(await (message_products_dashboard_xpath).textContent());
    await expect(await (message_products_dashboard_xpath).textContent()).toContain(" User can only see maximum 9 products on a page");
    await expect(sign_out_button_xpath).toBeVisible() == true;
    
    
});

//peter@protonmail.com
//Peterpotanos*1