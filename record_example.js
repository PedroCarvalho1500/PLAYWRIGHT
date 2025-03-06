const { webkit, devices } = require('playwright');

(async () => {
  const browser = await webkit.launch({
    headless: false
  });
  const context = await browser.newContext({
    ...devices['iPhone 11'],
  });
  const page = await context.newPage();

  // ---------------------
  await context.close();
  await browser.close();
})();