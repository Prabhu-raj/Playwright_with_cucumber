import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserType, chromium, firefox, webkit } from "@playwright/test";
import minimist from "minimist";
import { page, context, browser } from "../Base_file";
import { PageManager } from "../../page-objects/base/PageMangager";
import { browser as browserConfig } from "../../config/env";

BeforeAll(async function (this: any) {
  console.log("Launching browser instance for the test suite...");

  const browserName = this.parameters?.browser || browserConfig.name;
  console.log(`🌐 Launching browser: ${browserName}`);

  switch (browserName) {
    case "chromium":
      browser.instance = await chromium.launch({ headless: browserConfig.headless });
      break;
    case "firefox":
      browser.instance = await firefox.launch({ headless: browserConfig.headless });
      break;
    case "webkit":
      browser.instance = await webkit.launch({ headless: browserConfig.headless });
      break;
    default:
      throw new Error(`Invalid browser name: ${browserName}`);
  }

  context.instance = await browser.instance.newContext({
    viewport: { width: browserConfig.width, height: browserConfig.height },
  });
  page.instance = await context.instance.newPage();
});

Before(async function () {
  page.instance = await context.instance!.newPage();
  (this as any).page = page.instance;

  this.pageManager = new PageManager();
  this.basePage = this.pageManager.createBasePage();
  this.homePage = this.pageManager.createHomePage();
  this.contactUsPage = this.pageManager.createContactUspage();
  this.loginPage = this.pageManager.createLoginPage();
  this.signupPageReal = this.pageManager.createSignupPageReal();
  this.loginTypeSensePage = this.pageManager.createLoginTypesensePage();
  this.techPage = this.pageManager.createTechPage();
});

AfterAll(async function () {
  await browser.instance?.close();
  console.log("\nFinished execution of test suite!");
});

After(async function ({ pickle, result }) {
  if (result?.status === Status.FAILED) {
    if (page.instance) {
      const screenshotPath = `./reports/screenshots/${pickle.name}-${Date.now()}.png`;
      const image = await page.instance.screenshot({
        path: screenshotPath,
        type: "png",
      });
      await this.attach(image, "image/png");
    } else {
      console.error("page.instance is undefined");
    }
  }

  if (page.instance) {
    await page.instance.close();
  }
});
