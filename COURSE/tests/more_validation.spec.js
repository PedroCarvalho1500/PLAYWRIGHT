// @ts-check
const { test, expect } = require('@playwright/test');

test('Popup validations', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.goto('http://google.com');
    await page.goBack();
    //await page.goForward();
    const hide_element_button_css = page.locator('css=#hide-textbox');
    const show_element_button_css = page.locator('css=#show-textbox');
    const element_displayed_example_css = page.locator('css=#displayed-text');
    const name_field_css = page.locator('css=#name');
    const confirm_button_popup_css = page.locator('css=#confirmbtn');


    await (element_displayed_example_css).waitFor();
    //await expect (await (element_displayed_example_css).isVisible()).toEqual(true);
    await expect(element_displayed_example_css).toBeVisible();
    await (hide_element_button_css).click();

    //await expect (await (element_displayed_example_css).isVisible()).toEqual(false);
    await expect(element_displayed_example_css).toBeHidden();

    await (show_element_button_css).click();

    await expect(element_displayed_example_css).toBeVisible();
    //await expect (await (element_displayed_example_css).isVisible()).toEqual(true);

    await (name_field_css).fill("TEST_NAME");
    await (confirm_button_popup_css).click();
    await (page.on('dialog',dialog => dialog.accept()));
    



    
})
