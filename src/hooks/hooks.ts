import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";
import { page, context, browser } from "../step-definitions/Base_file";

// let browser: Browser;

//BeforeAll hook: Runs once before all scenarios
BeforeAll(async function () {
  console.log("Launching single Chrome instance...and Executing test suite...");
  browser.instance = await chromium.launch({ headless: false });
  context.instance = await browser.instance.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  page.instance = await context.instance.newPage();
});

// Before hook: Runs before each scenario
Before(async function () {
  // browser.instance = await chromium.launch({ headless: false });
  // context.instance = await browser.instance.newContext({
  //   viewport: { width: 1920, height: 1080 },
  // });
  page.instance = await context.instance!.newPage();
  (this as any).page = page.instance;
});

//AfterAll hook: Runs once after all scenarios
AfterAll(async function () {
  await browser.instance?.close();
  console.log("\nFinished execution of test suite!");
  process.exit(0); // Forces Node to kill all Chrome child processes
});

// After hook: Runs after each scenario
After(async function ({ pickle, result }) {
  if (result?.status === Status.FAILED) {
    if (page.instance) {
      const screenshotPath = `./reports/screenshots/${
        pickle.name
      }-${Date.now()}.png`;
      const image = await page.instance.screenshot({
        path: screenshotPath,
        type: "png",
        //timeout: 60000
      });
      await this.attach(image, "image/png");
    } else {
      console.error("page.instance is undefined");
    }
  }

  if (page.instance) {
    await page.instance!.close();
    // await context.instance!.close(); // it is related to the browser
  }
});
