const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test',async ({browser}) => {
    //playwright code-
    //step1 - open browser
    //await
    //step2 - enter u/p 2 seconds
    //await
    //step3 - click 
    //chrome - plugins/ cookies
    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    
});

test('Page Playwright test',async ({page}) => {
    //playwright code-
    //step1 - open browser
    //await
    //step2 - enter u/p 2 seconds
    //await
    //step3 - click 
    await page.goto('https://google.com')

    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    //
});