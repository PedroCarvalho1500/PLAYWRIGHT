const {After,Before, BeforeStep, AfterStep} = require('@cucumber/cucumber');
const {LoginPage} = require('../../pageobjects/LoginPage');
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test')


Before({timeout: 30000},async function() {
    browser = await playwright.chromium.launch({headless: true,width:1200, height:1200});
    let context = await browser.newContext();
    this.page =  await context.newPage();

    //let page = "";
    this.loginPage = new LoginPage(this.page);

    await this.loginPage.goTo();
    this.email_random = await this.loginPage.validLogin();
})


BeforeStep({timeout: 30000},function() {
    console.log("EXECUTED BEFORE STEP...")
})

After({timeout: 30000},async function() {
    await browser.close();
})

AfterStep(async function ({result}){
    console.log("RESULT: "+result.status);

    if(result.status == "PASSED"){
        await this.page.screenshot({path: 'screenshot_bdd.png'});
    }
})