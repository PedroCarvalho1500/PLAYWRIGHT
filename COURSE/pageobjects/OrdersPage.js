const {test,expect} = require('@playwright/test');


class OrdersPage
{
    constructor(page,email_random)
    {
        this.page = page;
        this.email_random = email_random;
        this.succesfull_ordered_xpath = this.page.locator('xpath=//h1[contains(text(),"Thankyou")]');
        this.order_history_button_xpath = this.page.locator('xpath=//label[contains(text(),"Orders History")]');
        this.order_list_products_xpath = this.page.locator('xpath=//tr[@class="ng-star-inserted"]/descendant::th');
        this.button_view_orders_xpath = this.page.locator('xpath=//div[contains(text()," View Orders ")]');
    }

    async checkOrderSuccessfull()
    {
        await (this.succesfull_ordered_xpath).waitFor();
        await expect(this.succesfull_ordered_xpath).toBeVisible() == true;
    }

    async openOrderHistory()
    {
        await (this.order_history_button_xpath).click();
        await (this.page.locator('xpath=//button[contains(text(),"Go Back to Cart")]').waitFor());        
    }

    async checkOrderHistoryInfo()
    {
        console.log("ALL ORDERS NUMBERS: ");
        console.log(await (this.order_list_products_xpath).allTextContents());
        await expect(await (this.order_list_products_xpath).allTextContents()).toContain(this.order_number_finished)

        const view_order_button_xpath = this.page.locator('xpath=//th[contains(text(),"'+this.order_number_finished+'")]/parent::tr/descendant::button[contains(text(),"View")]');

        await (view_order_button_xpath).click(); 
        await (this.button_view_orders_xpath).waitFor();

        let email_receiver_xpath = this.page.locator('xpath=//div[contains(text()," Delivery Address ")]/parent::div/descendant::p[1]')

        await expect (await (email_receiver_xpath).textContent()).toContain(this.email_random);
    }
}

module.exports = {OrdersPage};