import { Given, Then, When } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { page, context, browser } from "./Base_file";
import { expect } from "@playwright/test";
import { CucumberWorld } from "./world/CucumberWorld";
import logger from "../logger/logger";

let alertText: string;

// Given("I navigate to the WebdriverUniversity Homepage", async () => {
//   await page.instance!.goto(
//     "https://www.webdriveruniversity.com/Login-Portal/index.html"
//   );
//   // await page.instance!.waitForTimeout(2000);
// });

// When("I type a username {word}", async (userName) => {
//   await page.instance!.getByRole("textbox", { name: "Username" }).fill(userName);

//   // await page.instance?.pause();
// });

When("I type a username {word}", async function (this: CucumberWorld, userName) {
  await page.instance!.waitForTimeout(1000);
  await this.loginPage.typeUsername(userName);

  // await page.instance?.pause();
});


When("I type a password {word}", async function (this: CucumberWorld, password) {
  // await page.instance!.getByRole("textbox", { name: "Password" }).fill(password);
  await page.instance!.waitForTimeout(1000);

  await this.loginPage.typePassword(password);

});


When("I click on the login button", async function (this: CucumberWorld) {
  this.loginPage.page.on("dialog", async (alert) => {
    alertText = alert.message();
    console.log(alertText);
    await alert.accept();
  });

  // await page.instance!.getByRole("button", { name: "Login" }).click();
  await this.loginPage.clickOnLoginButton();
});

Then("I should be presented with an alert box which contains text {string}", async (expectedAlertText: string) => {
    expect(alertText).toBe(expectedAlertText);
  });