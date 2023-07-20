const {test,expect} = require('@playwright/test');


class OrdersPage
{
    constructor(page)
    {
        this.page = page;
        this.succesfull_ordered_xpath = this.page.locator('xpath=//h1[contains(text(),"Thankyou")]');
        this.order_history_button_xpath = this.page.locator('xpath=//label[contains(text(),"Orders History")]');
        this.order_list_products_xpath = this.page.locator('xpath=//tr[@class="ng-star-inserted"]/descendant::th');
    }

    async checkOrderSuccessfull()
    {
        await (succesfull_ordered_xpath).waitFor();
        await expect(succesfull_ordered_xpath).toBeVisible() == true;
    }
}

module.exports = {OrdersPage};