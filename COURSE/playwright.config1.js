// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 2,
  workers: 2,
  expect: {
    timeout: 12000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  reporter: 'html',
  projects: 
  [
    {
      name: 'safari',
      use: 
      {
        browserName: 'webkit',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on',
        //...devices['iPad Mini']
        //viewport: {width: 500, height: 500}
        //trace: 'retain-on-failure' //off,on
    
      }
    },
    {
      name: 'chrome',
      use: 
      {
        browserName: 'chromium',
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        trace: 'on',
        //...devices['Galaxy S9+'],
        //permissions: ['geolocation', 'notifications'],
        video: 'retain-on-failure',
        //video: 'on',
        viewport: {width: 1200, height: 900}
        //trace: 'retain-on-failure' //off,on
        
      }
    }
  ]


  /* Configure projects for major browsers */


  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

