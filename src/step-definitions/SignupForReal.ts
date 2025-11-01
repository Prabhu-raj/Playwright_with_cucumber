import { Given, Then, When, } from '@cucumber/cucumber'
import { chromium, Browser, expect, Page } from "@playwright/test";
import { CucumberWorld } from "./world/CucumberWorld";
import { BasePage } from '../page-objects/base/BasePage';
import { browser, page } from './Base_file';


// let browser: Browser;
// let context: any;
// let page: Page;
const URL = "https://bolt.playrealbrokerage.com/"

Given("I navigate to the Real web URL", async function (this: CucumberWorld) {
    // browser = await chromium.launch({headless: false});
    // context = await browser.newContext({
    //     viewport: {width: 1920, height: 1080}
    // });
    // page = await context.newPage();
 
    // await page.goto(URL);

    // await page.instance!.goto("https://bolt.playrealbrokerage.com/login"); // using normal method

    await this.basePage.navigate(URL); // using POM 
})

When("I click on the Join Real", async function (this: CucumberWorld) {
    // await page.instance!.getByRole('link', { name: 'Join Real' }).click(); // using normal method

    await this.signupPageReal.clickOnRealButton(); // using POM
})

When("Enter the firstName", async function (this: CucumberWorld) {
    await page.instance!.waitForTimeout(2000);
    // await page.instance!.getByTestId('firstName').fill("Test"); // using normal method

    await this.signupPageReal.fillFirstName(); // using POM
})

When("Enter the lastName", async function (this: CucumberWorld) {
    // await page.instance!.getByTestId('lastName').fill("real"); // using normal method

    await this.signupPageReal.fillLastName(); // using POM
})

When("Enter username", async function (this: CucumberWorld) {
    // await page.instance!.getByTestId('username').fill("Testreal5"); // using normal method

    await this.signupPageReal.fillUserName(); // using POM
})

When("Enter email", async function (this: CucumberWorld) {
    // await page.instance!.getByTestId('emailAddress').fill("Testreal5@gmail.com"); // using normal method

    await this.signupPageReal.fillEmail(); // using POM
})

When("select the country", async function (this: CucumberWorld) {
    // await page.instance!.getByTestId('country').click(); page.instance!.getByRole('option', { name: 'United States' }).click(); // using normal method

    await this.signupPageReal.selectCountry();
})

When("Enter the password", async function (this: CucumberWorld) {
    // await page.instance!.getByTestId('password').fill("Testtest@1234"); // using normal method

    await this.signupPageReal.fillPassword();
})

When("Renter the password confirmation", async function (this: CucumberWorld) {
    await page.instance!.waitForTimeout(2000);
    // await page.instance!.getByTestId('confirmPassword').fill("Testtest@1234");  
    // await page.instance!.pause();  
    await this.signupPageReal.reFillPassword();
})

When("Confirm the check boxI", async function (this: CucumberWorld) {
    // await page.instance!.getByRole('checkbox', { name: 'terms' }).check(); 

    await this.signupPageReal.checkBoxI();
})

When("Confirm the second check boxII", async function (this: CucumberWorld) {
    // await page.instance!.getByRole('checkbox', { name: 'permission' }).check();

    await this.signupPageReal.checkBoxII();
})

When("Click on the Create Account", async function (this: CucumberWorld) {
    await page.instance!.waitForTimeout(2000);
    // await page.instance!.getByRole('button', { name: 'Create Account' }).click();

    await this.signupPageReal.createAccount();
})

Then("I should be land on the registration process page", async function (this: CucumberWorld) {
    await page.instance!.waitForTimeout(5000);
    await this.signupPageReal.registrationPage();
    // await expect(page.instance!).toHaveURL('https://bolt.playrealbrokerage.com/onboarding/application-form');
    
})