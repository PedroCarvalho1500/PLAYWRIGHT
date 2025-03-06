const {test,expect} = require('@playwright/test');


test('Google Search Test',async ({page}) => {
    const search_field_google = page.locator('xpath=//textarea[@title="Pesquisar"]');
    const search_button = page.locator('css=input[value="Google Search"]')
    const google_logo = page.locator("xpath=//img[@src='/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png']")
    const items = page.locator('textarea[title="Pesquisar"]');
    const items2 = page.locator('input[value="Google Search"]');

    await page.goto('https://google.com');
    for (let i = 0; i < await items.count(); i++) {
      await items.nth(i).fill('Playwright');
    }

    // for (let i = 0; i < await items2.count(); i++) {
    //     await items2.nth(i).click();
    // }


    await expect(page).toHaveTitle('Google');
    await expect(page).toHaveURL('https://www.google.com')
    await expect(google_logo).toBeEnabled()
    //await page.goto('https://google.com');
    //await search_field_google.fill('PLAYWRIGHT');
    
    //textarea[aria-label='Search']
});



test('Google Search Test 2',async ({page}) => {
    const search_field_google = page.locator('xpath=//textarea[@title="Pesquisar"]');
    const search_button = page.locator('css=input[value="Google Search"]')
    const google_logo = page.locator("xpath=//img[@src='/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png']")
    const items = page.locator('textarea[title="Pesquisar"]');
    const items2 = page.locator('input[value="Google Search"]');

    await page.goto('https://google.com');
    for (let i = 0; i < await items.count(); i++) {
      await items.nth(i).fill('Playwright');
    }

    // for (let i = 0; i < await items2.count(); i++) {
    //     await items2.nth(i).click();
    // }


    await expect(page).toHaveTitle('Google');
    await expect(page).toHaveURL('https://www.google.com')
    await expect(google_logo).toBeEnabled()
    //await page.goto('https://google.com');
    //await search_field_google.fill('PLAYWRIGHT');
    
    //textarea[aria-label='Search']
});

