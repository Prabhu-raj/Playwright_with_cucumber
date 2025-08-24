import { Given, When } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { page, context, browser } from "./Base_file";
import { CucumberWorld } from "./world/CucumberWorld";
// import { ur } from "@faker-js/faker/.";
// import { pageFixture } from "../logger/browserContextFixture";
import logger from "../logger/logger";
import { ur } from "@faker-js/faker/.";

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

const url = "https://www.webdriveruniversity.com/";

Given("I navigate to the WebdriverUniversity homepage", async function (this: CucumberWorld) {
    /* browser.instance = await chromium.launch({ headless: false });
       context.instance = await browser.instance.newContext({
       viewport: { width: 1920, height: 1080 },
     });
     page.instance = await context.instance.newPage();

     logger.info('Accessing URL: ' + URL)
     await pageFixture.page.goto(url); */ // Using pageFixture method from browserContextFixture.ts

    //  await page.instance!.goto(url); // normal method

    await this.basePage.navigate(url); // Using page object model
    this.setUrl(url); // Using page object model
  }
);

When("I click on the Contact us button", async function (this: CucumberWorld) {
  /* await page.pause();
     const contactUs_Button = pageFixture.page.getByRole("link", {
     name: "CONTACT US Contact Us Form",
     }); */ // Using pageFixture model from browserContextFixture.ts

  /* const contactUs_Button = page.instance!.getByRole("link", { name: "CONTACT US Contact Us Form",});
  await contactUs_Button.click(); */ // Using getByRole 
    // await this.basePage.waitAndClickByRole("link", "Contact Us Form"); // Using pageObject modelling from BasePage.ts
    this.homePage.clickOnContactUsButton();
});

When("I Click on the Login Portal button", async function (this: CucumberWorld) {
  /* const login_button = page.instance!.getByRole("link", { name: "LOGIN PORTAL Login Portal",});
  await login_button.waitFor({ state: "visible", timeout: 60000 });
  await login_button.click(); */ // Using normal method from Base_file.ts */

  // await this.basePage.waitAndClickByRole("link", "Login Portal") // Using pageObject modelling from BasePage.ts
  this.homePage.clickOnLoginPortalButton();
  // await page.instance!.pause();
});
