import {expect, Page} from '@playwright/test'
import { Given, When, Then } from '@cucumber/cucumber'
import { CucumberWorld } from './world/CucumberWorld'
import { page } from '../step-definitions/Base_file'


// let alertText: string;

let URL = "https://cloud.typesense.org/";

Given('I navigate to the typeSense URL', async function (this: CucumberWorld) {

    await this.basePage.navigate(URL)
})

When("I click on the ts Login button", async function (this: CucumberWorld) {

    await this.loginTypeSensePage.clickOnButton();
})

When("I enter a valid email", async function (this: CucumberWorld) {

    await this.loginTypeSensePage.fillemail();
})

When('I enter a valid password', async function (this: CucumberWorld) {

    await this.loginTypeSensePage.fillPassword();
})

When('I click on the typeSense Login button', async function (this: CucumberWorld) {
    // await page.instance!.pause();

    await this.loginTypeSensePage.clickTypesenseLoginButton();
})

// Then('I should be land on the typeSense home page', async function (this: CucumberWorld) {

//     console.log("➡️ Entered step definition");
//     await this.loginTypeSensePage.toHaveUrl();
//     console.log("✅ Step completed");
//     // await expect(page.instance!).toHaveURL("https://cloud.typesense.org/clusters");
// })