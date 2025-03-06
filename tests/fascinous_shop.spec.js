// @ts-check
const { test, expect } = require('@playwright/test');

let context;
let page;

test.beforeAll(async ({browser}) => {
  //context = browser.newContext();
  //await (await context).tracing.start({
  //  snapshots: true,
  //  screenshots: true
  //})
  //page = await((await (await context).newPage()).goto('https://www.camisariafascynios.com.br/camisa-social-masculina/04?initialMap=c&initialQuery=camisa-social-masculina&map=category-1,tamanho'))
  page = await browser.newPage()
  await page.goto('https://www.camisariafascynios.com.br/camisa-social-masculina/04?initialMap=c&initialQuery=camisa-social-masculina&map=category-1,tamanho')
  if(await page.locator("css=button[aria-label='Close']").isVisible() == true){
    await page.locator('css=button[aria-label="Close"]').click();
  }
})



/*test.beforeEach(async ({ page }) => {
  await page.goto('https://www.camisariafascynios.com.br/camisa-social-masculina/04?initialMap=c&initialQuery=camisa-social-masculina&map=category-1,tamanho');
  });*/


test('Check if page is loaded', async ({}) => {
  let value = "0"
    //console.log("ENTERED HERE...")


    //if((await page.locator("css=button[aria-label='Close']").isVisible()) == true){
    //  await page.locator('css=button[aria-label="Close"]').click();
    //}

    //await context.tracing.start({snapshots:true, screenshots: true})

    
    
    //await page.locator('css=button[aria-label="Close"]').click();
    //console.log("HERE "+page.locator('xpath=//span[contains(text(),"Produtos")]/parent::span').innerText)
    //console.log("HERE "+page.locator('xpath=//span[contains(text(),"Produtos")]/parent::span').textContent())
    //console.log("HERE ")
    //console.log("HERE "+(await page.innerText('xpath=//span[contains(text(),"Produtos")]/parent::span')).split(" ")[0])
    
    //page.on('console', msg => console.log(msg.text()))
    //console.log("HERE")
    //page.on('console', msg => console.log(msg.text()))
    //console.log("HERE "+(await page.innerText('xpath=//span[contains(text(),"Produtos")]/parent::span')).split(" ")[0])


  await page.locator('xpath=//span[contains(text(),"Produtos")]/parent::span').waitFor({state: "visible"})
  value = (await page.innerText('xpath=//span[contains(text(),"Produtos")]/parent::span')).split(" ")[0]

  //await context.tracing.stop({path: 'FASCYNIOUS_TEST.zip'})



  await expect(page.locator('xpath=//span[contains(text(),"Produtos")]/parent::span')).toBeVisible()
  await expect(value).toEqual("42")
  await expect(page.locator('xpath=//h1[contains(text(),"Camisa Social Masculina")]')).toBeVisible()
  await expect(1).toEqual(1)
  // GET ALL THE PRICES
  //await page.getByRole('link', { name: 'Get started' }).click();
  
  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);
});


//test.afterEach(async ({page}) => {
//  await page.close()
//});


test.afterAll(async () => {
  //await context.tracing.stop({path: 'test2_trace.zip'})
  await page.close()
})
