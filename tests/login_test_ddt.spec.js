const {test, expect} = require('@playwright/test');
//const {customtest} = require('./utils/test-base');
const dataset = JSON.parse(JSON.stringify(require('./utils/UIBasicstestTestData.json')))
const {customtest} = require('./utils/test-base');
//JSON -> string -> js object


// for (const data of dataset)
// {
//     test(`Client App login ${data.username}`,async ({browser}) => {
//         const context = await browser.newContext();
//         const page =  await context.newPage();
//         const username_css = page.locator('css=input[id="username"]');
//         const signIn = page.locator('css=input[id="signInBtn"]');
        
//         await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

//         //css, xpath
//         await page.locator('css=input[id="username"]').type(data.username);
//         await page.locator('css=input[id="password"]').type(data.password);
//         await page.locator('css=input[id="signInBtn"]').click();


//         const product_from_dataset_xpath = page.locator('xpath=//b[contains(text(),"iphone 13 pro")]/parent::h5/parent::div/descendant::button[contains(text(),"Add To")]');

//     });
// }


customtest(`Client App login 2`,async ({browser, testDataForOrder}) => {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const username_css = page.locator('css=input[id="username"]');
    const signIn = page.locator('css=input[id="signInBtn"]');
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //css, xpath
    await page.locator('css=input[id="username"]').type(testDataForOrder[0].username);
    await page.locator('css=input[id="password"]').type(testDataForOrder[0].password);
    await page.locator('css=input[id="signInBtn"]').click();


    const product_from_dataset_xpath = page.locator('xpath=//b[contains(text(),"iphone 13 pro")]/parent::h5/parent::div/descendant::button[contains(text(),"Add To")]');

});