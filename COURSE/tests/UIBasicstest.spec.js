const {test, expect} = require('@playwright/test');
const {customtest} = require('./utils/test-base');
//JSON -> string -> js object
const UIBasicsDataSet = JSON.parse(JSON.stringify(require('./utils/UIBasicstestTestData.json')));

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
    const username_css = page.locator('css=input[id="username"]');
    const signIn = page.locator('css=input[id="signInBtn"]');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //css, xpath
    console.log(UIBasicsDataSet[2].username)
    await page.locator('css=input[id="username"]').fill(UIBasicsDataSet[2].username);
    await page.locator('css=input[id="password"]').fill(UIBasicsDataSet[2].password);
    await page.locator('css=input[id="signInBtn"]').click();
    //await sleep(3000);
    //console.log(await page.locator('css=div[style*="block"]').textContent());
    //console.log(await page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div').isVisible())
    //await expect(page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div')).toBeVisible() == true;

    //wait until this locator shown up page
    await expect(await page.locator('css=div[style*="block"]')).toBeVisible() == true;
    await expect(await page.locator('css=div[style*="block"]').textContent()).toEqual("Incorrect username/password.");

    await username_css.fill("");
    await username_css.fill("rahulshettyacademy");

    //This Promisse will wait until both functions returned. Two steps are linked, so we need to pass them together through Promisse.all([])
    await Promise.all(
        [
        page.waitForNavigation(),
            signIn.click()
        ]
        );


    
});


test('Browser Context Playwright test 2',async ({browser}) => {
    //playwright code-
    //step1 - open browser
    //await
    //step2 - enter u/p 2 seconds
    //await
    //step3 - click 
    //chrome - plugins/ cookies
    const context = await browser.newContext();
    const page =  await context.newPage();
    const username_css = page.locator('css=input[id="username"]');
    const password_css = page.locator('css=input[id="password"]');
    const login_button_css = page.locator('css=input[id="signInBtn"]');
    const products_css = page.locator('css=div[class="card-body"]>h4>a');


    let dashboard_loaded = false;
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //css, xpath
    //type, fill
    await username_css.fill('rahulshettyacademy');
    await password_css.fill('learning');
    await login_button_css.click();
    //await sleep(3000);
    //console.log(page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div').textContent());
    //console.log(await page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div').isVisible())
    //await expect(page.locator('xpath=//strong[contains(text(),"Incorrect")]/parent::div')).toBeVisible() == false;
    //console.log(await(products_css).nth(0).textContent());
    //console.log(await(products_css).first().textContent());
    //console.log(await(products_css).last().textContent());
    //while(!dashboard_loaded){dashboard_loaded = await(page.locator('xpath=//h1[contains(text(),"Shop Name")]')).isVisible();}
    //
    //await page.waitForLoadState('domcontentloaded');
    //await page.waitForLoadState('networkidle');
    //allTextContents Element won't wait until the element is visible, so it might return an EMPTY array
    
    // await Promise.all(
    //     [
            
    //     page.waitForURL('**\/shop**'),
    //         login_button_css.click()
    //     ]
    //     );
    await page.locator('xpath=//h1[contains(text(),"Shop Name")]').waitFor();
    const allTitles = await products_css.allTextContents();
    console.log(allTitles)
    
    await expect(allTitles).toContain('iphone X')
    await expect(await (page.locator('xpath=//h1[contains(text(),"Shop Name")]'))).toBeVisible() == true;
    
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
    //console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    //
});

test('UI Controls', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username_css = page.locator('css=input[id="username"]');
    const password_css = page.locator('css=input[id="password"]');
    const dropdown = page.locator('css=select.form-control');
    const radio_buttons = page.locator('css=.radiotextsty');
    const documentLink = page.locator('css=[href*="documents-request"]');
    await dropdown.selectOption("consult");
    await radio_buttons.last().click();
    await (page.locator('css=#okayBtn').click());
    //await page.pause();

    //assertion
    console.log(await(page.locator('css=.radiotextsty').last().isChecked()));
    await expect(page.locator('css=.radiotextsty').last()).toBeChecked();

    await page.locator('css=#terms').click();
    await expect(page.locator('css=#terms')).toBeChecked();
    await page.locator('css=#terms').uncheck();
    console.log(await(page.locator('css=#terms').isChecked()));
    expect( await page.locator('css=#terms').isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("class","blinkingText");
    await documentLink.click();


});


test('Child windows handling', async({browser}) => {

    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const radio_buttons = page.locator('css=.radiotextsty');
    const documentLink = page.locator('css=[href*="documents-request"]');
    const username_css = page.locator('css=input[id="username"]');
    const password_css = page.locator('css=input[id="password"]');
    

    await expect(documentLink).toHaveAttribute("class","blinkingText");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
            documentLink.click(),
    ]);

    //Let's say that two new tabs will be opened. In this case, you just need to add one more newPage inside the response Array
    /*
    const [newPage, newPage2] = await Promise.all([
        context.waitForEvent('page'),
            documentLink.click(),
    ]);
    */

    const documentsRequestMessage = newPage.locator('css=p[class="im-para red"]');
    let emailFromSecondWindow = await(documentsRequestMessage).textContent();
    emailFromSecondWindow = await(newPage.locator('css=p[class="im-para red"]>strong')).textContent();
    //console.log(emailFromSecondWindow);
    await username_css.fill(emailFromSecondWindow);
    await expect(await(documentsRequestMessage)).toBeVisible();
    await expect(await(documentsRequestMessage).textContent()).toEqual('Please email us at mentor@rahulshettyacademy.com with below template to receive response ');
    //console.log(await(documentsRequestMessage).isVisible());
    


});

