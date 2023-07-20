const {test,expect} = require('@playwright/test');

class DashboardPage
{
    constructor(page,email_random)
    {
        this.page = page;
        this.email_random = email_random;
        this.message_products_dashboard_xpath = this.page.locator('xpath=//div[@class="d-flex flex-row mb-2"]/descendant::label');
        this.products_list = this.page.locator('xpath=//h5/b');
        this.sign_out_button_xpath = this.page.locator('xpath=//button[contains(text(),"Sign Out")]');
        this.product_iphone13_pro_add_to_cart_xpath = this.page.locator('xpath=//b[contains(text(),"iphone 13 pro")]/parent::h5/parent::div/descendant::button[contains(text(),"Add To")]');
        this.cart_button_xpath = this.page.locator('xpath=//button[@routerlink="/dashboard/cart"]');
        this.successfull_added_to_the_cart_xpath = this.page.locator('xpath=//div[@id="toast-container"]');
        
    }


    async addProductToCart()
    {
        await (this.message_products_dashboard_xpath).waitFor();
        console.log(await(this.products_list).first().textContent());
        console.log(await (this.products_list).allTextContents());
        
        console.log(await (this.message_products_dashboard_xpath).textContent());
        await expect(await (this.message_products_dashboard_xpath).textContent()).toContain(" User can only see maximum 9 products on a page");
        await expect(this.sign_out_button_xpath).toBeVisible() == true;

        await(this.product_iphone13_pro_add_to_cart_xpath).click();
        await expect(await(this.successfull_added_to_the_cart_xpath)).toBeVisible() == true

        await (this.cart_button_xpath).click();
    }


}

module.exports = {DashboardPage};