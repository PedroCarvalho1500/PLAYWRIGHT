const {test,expect} = require('@playwright/test');

class CartPage
{
    constructor(page,email_random)
    {
        this.page = page;
        this.email_random = email_random;
        this.cart_elements_list_xpath = this.page.locator('xpath=//h3/parent::div[@class="cartSection"]/descendant::h3');
        this.order_number = this.page.locator('xpath=//h3[contains(text(),"iphone 13")]/parent::div/descendant::p[@class="itemNumber"]');
        this.checkout_button_xpath = this.page.locator('xpath=//button[contains(text(),"Checkout")]');
        this.email_to_buy_css = this.page.locator('css=input[class*="input txt text-validated n"]');

    }


    async checkCartProducts()
    {
        await (this.checkout_button_xpath).waitFor();
        await expect(await(this.checkout_button_xpath)).toBeVisible();
        //await (cart_elements_list_xpath).waitFor();
        //console.log(await(this.cart_elements_list_xpath).first().allTextContents());
        await expect(await(this.cart_elements_list_xpath).first().allTextContents()).toContain('iphone 13 pro');
        //console.log(await(this.order_number).textContent());

        await (this.checkout_button_xpath).click();

    }
}

module.exports = {CartPage};