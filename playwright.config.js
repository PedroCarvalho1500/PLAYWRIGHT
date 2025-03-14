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
  workers: 4,
  retries: 1,
  expect: {
    timeout: 12000
  },
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  reporter: [['html', { open: 'never' }]],
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on'
  },

  /* Configure projects for major browsers */


  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

