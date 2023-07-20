const {test,expect} = require('@playwright/test');

class CreditCardPage
{
    constructor(page,email_random)
    {
        this.page = page;
        this.email_random = email_random;
        this.current_email_xpath = this.page.locator('xpath=//div[@class="details__user"]/descendant::div/descendant::label');
        this.cvv_code_field_xpath = this.page.locator('xpath=//div[contains(text(),"CVV")]/following::input[1]');
        this.country_field_xpath = this.page.locator('xpath=//div[@class="user__address"]/descendant::div/descendant::input');
        this.coupon_field_css = this.page.locator('css=input[name="coupon"]');
        this.coupon_value = "rahulshettyacademy";
        this.apply_coupon_button_xpath = this.page.locator('xpath=//button[contains(text(),"Coupon")]');
        this.coupon_applied_xpath = this.page.locator('xpath=//p[contains(text(),"Applied")]');
        this.place_order_button_xpath = this.page.locator('xpath=//a[contains(text(),"Place Order")]');
        this.name_on_card_field_xpath = this.page.locator('xpath=//div[contains(text(),"Name on Card ")]/parent::div/descendant::input');
    }

    async fillingInfoCreditCard()
    {
        await (this.current_email_xpath).waitFor();

        console.log(await(this.current_email_xpath).textContent());
        await expect(await(this.current_email_xpath).textContent()).toEqual(this.email_random);


    await (this.cvv_code_field_xpath).fill('655');
    await (this.country_field_xpath).click();
    await (this.country_field_xpath).type("B");
    await (this.country_field_xpath).type("r");
    await (this.country_field_xpath).type("a");
    await (this.country_field_xpath).type("z");
    while(this.page.locator('css=section[class*="ta-results list-group"]').isVisible() == false)
    {
        await (this.page.keyboard.press('Enter'));
    }
    
    //await (page.locator('css=section[class*="ta-results list-group"]').waitFor());
    //await expect(await (page.locator('css=section[class*="ta-results list-group"]'))).toBeVisible() == true;
    await (this.page.locator('xpath=//span[contains(text(),"Brazil")]').click());
    await (this.coupon_field_css).fill(this.coupon_value);
    await (this.apply_coupon_button_xpath).click();

    await (this.coupon_applied_xpath).waitFor();
    await expect (await(this.coupon_applied_xpath)).toBeVisible() == true;

    await (this.name_on_card_field_xpath).fill("MY_NAME");
    await (this.place_order_button_xpath).click();


    }


    
    // let order_number_finished = await(page.locator('xpath=//label[@class="ng-star-inserted"]')).textContent();
    // order_number_finished = order_number_finished.replace(" ", "").replace("|", "").replace(" |", "");
    // order_number_finished = order_number_finished.trim();
    // console.log("ORDER_NUMBER"+order_number_finished);


}

module.exports = {CreditCardPage};