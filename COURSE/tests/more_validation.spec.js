// @ts-check
const { test, expect } = require('@playwright/test');




test('Popup validations', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const hide_element_button_css = page.locator('css=#hide-textbox');
    const show_element_button_css = page.locator('css=#show-textbox');
    const element_displayed_example_css = page.locator('css=#displayed-text');
    const name_field_css = page.locator('css=#name');
    const confirm_button_popup_css = page.locator('css=#confirmbtn');
    const mouse_over_css = page.locator('css=#mousehover');

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

    await (mouse_over_css).hover();

});




test('Handle Frames', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
     
    //CHANGING FRAME FOCUS
    let new_frame_manage = page.frameLocator('#courses-iframe').first();

    await (new_frame_manage.locator("li a[href*='lifetime-access']:visible").click({force: true}));

    //let i = 0;
    //while (i<20 && await(new_frame_manage.locator('xpath=//div[@class="text"]/h2').isVisible()) == false)
    //{
    //    console.log(await(new_frame_manage.locator('xpath=//div[@class="text"]/h2').isVisible()));
    //    i+=1
    //}
    //await (new_frame_manage.locator('xpath=//a[contains(text(),"All Access plan")]').last()).click({force: true});
    //const new_frame = page.locator('#courses-iframe').locator('xpath=//li[@class="current"]/a[contains(text(),"All Access plan")]');
    //await (new_frame_manage).locator('xpath=//div[@class="text"]/h2').waitFor({timeout: 40000});
    const text_join_subscribers_xpath = new_frame_manage.locator('xpath=//div[@class="text"]/h2');
    
    //console.log(await(text_join_subscribers_xpath).textContent());

    const textConteudo = await(text_join_subscribers_xpath).textContent();
    //textContent?.split(" ", 4);
    // @ts-ignore
    console.log(textConteudo.split(" ")[1]);
    //textContent = textContent.split(" ",4);

    //const new_frame_xpath = page.locator('xpath=//header[@class="main-header"]/descendant::li[@class="current"]/a');
    //await (new_frame.locator("li a[href*='lifetime-access']:visible")).click();
    //await(new_frame.locator('css=li[class="current"]>a[href*="lifetime-access"]')).click();
    //await (page.locator('css=li[class="current"]>a[href*="lifetime-access"]')).waitFor();
    //await(page.locator('css=li[class="current"]>a[href*="lifetime-access"]')).click();

    //let cont = 0
    //while((await(page.locator('xpath=//div[@class="page-wrapper"]/descendant::a[contains(text(),"All Access plan")][1]').isVisible()) == false) && (cont < 30)){
    //    new_frame_manage = page.frameLocator('#courses-iframe');
    //    console.log(await(page.locator('xpath=//div[@class="page-wrapper"]/descendant::a[contains(text(),"All Access plan")][1]')).isVisible());
    //    cont+=1
    //}

    //await(new_frame_manage.locator('xpath=//div[@class="page-wrapper"]/descendant::a[contains(text(),"All Access plan")][1]')).click();
    //new_frame_manage = page.frameLocator('#courses-iframe');
    //await (new_frame_xpath).click();



});





test('Screenshot & Visual Comparison', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const hide_element_button_css = page.locator('css=#hide-textbox');
    const show_element_button_css = page.locator('css=#show-textbox');
    const element_displayed_example_css = page.locator('css=#displayed-text');
    const name_field_css = page.locator('css=#name');
    const confirm_button_popup_css = page.locator('css=#confirmbtn');
    const mouse_over_css = page.locator('css=#mousehover');

    await (element_displayed_example_css).waitFor();
    await expect(element_displayed_example_css).toBeVisible();
    await (hide_element_button_css).screenshot({path: 'hidden_element.png'})
    await (hide_element_button_css).click();
    await (page.screenshot({path: 'screenshot.png'}));
    
    await expect(element_displayed_example_css).toBeHidden();

    // screenshot -> store -> screenshot -> Compare two screenshot and verify if they are different from each other.



});



test.only('Visual comparison between screenshots', async ({page}) => {
    await page.goto('http://www.rediff.com/');
    await expect(await page.screenshot()).toMatchSnapshot('landing.png');

    // screenshot -> store -> screenshot -> Compare two screenshot and verify if they are different from each other.



});