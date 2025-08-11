import { Given, When } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { page, context, browser } from "./Base_file";
import { pageFixture } from "../hooks/browserContextFixture";

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

const url = "https://www.webdriveruniversity.com/";

Given("I navigate to the WebdriverUniversity homepage", async () => {
  browser.instance = await chromium.launch({ headless: false });
  context.instance = await browser.instance.newContext({ viewport: { width: 1920, height: 1080 },});
  page.instance = await context.instance.newPage();

  // await pageFixture.page.goto(url);
    await page.instance.goto(url);
});

When("I click on the Contact us button", async () => {
  // await page.pause();
  const contactUs_Button = page.instance!.getByRole("link", { name: "CONTACT US Contact Us Form", });
  // const contactUs_Button = pageFixture.page.getByRole("link", {
  //   name: "CONTACT US Contact Us Form",
  // });
  await contactUs_Button.click();
});

When("I switch to the new browser tab", async () => {
  page.instance = await context.instance!.waitForEvent("page");
  await page.instance.bringToFront();

});

// Given("I type a First name", async () => {
//   // await page.pause();
//   const fillFirstName = page.getByRole("textbox", { name: "First Name" });
//   await fillFirstName.fill("Joe");
//   // await page.getByRole('button', { name: 'SUBMIT' }).click();
// });
