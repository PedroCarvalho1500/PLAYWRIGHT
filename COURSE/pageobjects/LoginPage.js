const {test,expect} = require('@playwright/test');

class LoginPage
{
    constructor(page)
    {
        //this.context = context;
        //this.page = page;
        this.page = page;
        this.register_button_xpath = this.page.locator('xpath=//a[contains(text(),"Register here")]');
        this.firstNameField_css = this.page.locator('css=#firstName');
        this.lastNameField_css = this.page.locator('css=#lastName');
        this.emailField_css = this.page.locator('css=#userEmail');
        this.mobileField_css = this.page.locator('css=#userMobile');
        this.passwordRegisterField_css = this.page.locator('css=#userPassword');
        this.confirmPasswordRegisterField_css = this.page.locator('css=#confirmPassword');
        this.i_am_18_css = this.page.locator('css=input[type="checkbox"]');
        this.register_button_css = this.page.locator('css=input[value="Register"]');
        this.email_field_css = this.page.locator('css=#userEmail');
        this.password_field_css = this.page.locator('css=#userPassword');
        this.login_button_css = this.page.locator('css=input[value="Login"]')
        this.dashboard_loaded = false;
        this.message_products_dashboard_xpath = this.page.locator('xpath=//div[@class="d-flex flex-row mb-2"]/descendant::label');
        this.products_list = this.page.locator('xpath=//h5/b');
        this.sign_out_button_xpath = this.page.locator('xpath=//button[contains(text(),"Sign Out")]');
    }

    generate_random_email(){
        return (Math.random() + 1).toString(36).substring(7) + "@prontonmail.com";
    }

    async goTo()
    {
        await this.page.goto('https://rahulshettyacademy.com/client')

    }
    
    async validLogin()
    {
        const email_random = this.generate_random_email();
        await this.register_button_xpath.click();
        await this.firstNameField_css.fill('Peter');
        await this.lastNameField_css.fill('Test');
        await this.emailField_css.fill(email_random);
        await this.mobileField_css.fill('9999989834');
        await this.passwordRegisterField_css.fill('Peterpotanos*1');
        await this.confirmPasswordRegisterField_css.fill('Peterpotanos*1');
        await this.i_am_18_css.click();
        await this.register_button_css.click();
        await this.page.locator('xpath=//button[contains(text(),"Login")][@tabindex="0"]').first().click();
        await expect(this.login_button_css).toBeVisible() == true
        await this.email_field_css.fill(email_random);
        await this.password_field_css.fill("Peterpotanos*1");
        await this.login_button_css.click({ force: true });

    while(this.dashboard_loaded == false)
    {
       this.dashboard_loaded = await(this.message_products_dashboard_xpath).isVisible();
    }
    await this.page.waitForLoadState('networkidle');
    
    return email_random;
    }


}

module.exports = {LoginPage};