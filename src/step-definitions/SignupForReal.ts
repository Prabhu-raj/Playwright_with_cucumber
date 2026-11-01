import { Given, Then, When, } from '@cucumber/cucumber'
import { chromium, Browser, expect, Page, selectors } from "@playwright/test";
import { CucumberWorld } from "./world/CucumberWorld";
import { BasePage } from '../page-objects/base/BasePage';
import { browser, page } from './Base_file';
import { urls } from '../config/env';

// let browser: Browser;
// let context: any;
// let page: Page;
const URL = urls.peiRegistration

Given("Navigate to the PEI web URL", async function (this: CucumberWorld) {
    // browser = await chromium.launch({headless: false});
    // context = await browser.newContext({
    //     viewport: {width: 1920, height: 1080}
    // });
    // page = await context.newPage();
 
    // await page.goto(URL);

    // await page.instance!.goto("https://bolt.playrealbrokerage.com/login"); // using normal method

    await this.basePage.navigate(URL); // using POM 
    // await page.instance?.waitForTimeout(5000)
})

When("Select how did you hear about us", async function (this: CucumberWorld) {
    await page.instance?.waitForTimeout(2000)
    await this.signupPageReal.selectreference();
})

When("Select LinkedIn", async function (this: CucumberWorld) {
    // await page.instance?.waitForTimeout(5000)
    await this.signupPageReal.selectLinkedIn();
    // await page.instance?.pause();
})

When("Enter forenames", async function (this: CucumberWorld) {
    // await page.instance?.waitForTimeout(5000)
    await this.signupPageReal.fillForenames();
    // await page.instance?.pause();
})

When("Enter surname", async function (this: CucumberWorld) {

    await this.signupPageReal.fillSurname();
})

When("Enter email", async function (this: CucumberWorld) {

    await this.signupPageReal.fillEmailAddress();
})

When("Confirm email address", async function (this: CucumberWorld) {

    await this.signupPageReal.confirmEmailAddress();
})

When("Confirm password", async function (this: CucumberWorld) {

    await this.signupPageReal.confirmPassword();
})

When("Select Yes for do you currently work with us", async function (this: CucumberWorld) {

    await this.signupPageReal.currentlyWorkWithUs();
})

When("Select yes for receiving alers from the company", async function (this: CucumberWorld) {

    await this.signupPageReal.jobAlerts();
    // await page.instance?.pause();
})

When("Select specific role inoformation", async function (this: CucumberWorld) {

    await this.signupPageReal.specificRole();
})

When("Select preferred location", async function (this: CucumberWorld) {

    await this.signupPageReal.selectLocation();
})

When("Confirm the check box", async function (this: CucumberWorld) {

    await this.signupPageReal.checkBoxI();
})

When("Upload CV", async function (this: CucumberWorld) {
    
    await this.signupPageReal.uploadCV();
    // await page.instance?.pause();
})
