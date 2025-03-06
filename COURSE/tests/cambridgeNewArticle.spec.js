import chromium from '@playwright/test'
import { PlaywrightTestConfig,test } from '@playwright/test';
const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432, //Please insert your valid port form your PostgreSQL DB
    password: process.env.POSTGRESSPASSWORD, // Your password
    database: "world" // Your name of database
});

test('Create new Article under my Workbook', async ({page}) => {
    await client.connect();

    
    let wordsArticle = await client.query(`SELECT word FROM words ORDER BY RANDOM() LIMIT 20;`);
    console.log(wordsArticle);

    let list_of_words = [];

    wordsArticle.rows.forEach((word) => {
        list_of_words.push(JSON.stringify(word["word"]).replace("\\","").replace("\"",""))
    });


    list_of_words = JSON.stringify(list_of_words);

    console.log(list_of_words);

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await page.goto('https://writeandimprove.com/workbooks#/wi-workbooks');
    await page.waitForTimeout(4000);

    await page.click("img[src='img/svg/award-level-intermediate.svg']");
    await page.click("#sign-in");


    await page.waitForTimeout(2000);
    await page.fill("#email-or-username", username);
    await page.fill("#password", password);
    await page.click("#btn-sign-in");

    await page.waitForTimeout(4000);
    await page.click("li#sidebar-user-workbooks > ul");
    await page.waitForTimeout(3000);
    await page.click("#new-task-button");

    await page.waitForTimeout(2000);
    await page.click("#cefr");
    await page.waitForTimeout(2000);
    await page.fill("#task-genre", "Write an essay including the following words");
    await page.fill("#task-topic", "Free Topic");

    await page.waitForTimeout(2000);
 //   await page.keyboard.press('Tab');
 //   await page.keyboard.press('Tab');
 //   await page.keyboard.press('Tab');
    await page.locator(`.public-DraftEditorPlaceholder-inner`).click();
    await page.keyboard.insertText(list_of_words);
    //await page.locator(`.public-DraftEditorPlaceholder-inner`).fill(list_of_words);

    await page.click("#task-form-submit");
    await page.waitForTimeout(3000);

    await page.close();
});
