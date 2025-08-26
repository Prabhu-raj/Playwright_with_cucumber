import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserType, chromium, firefox, webkit } from "@playwright/test";
// import { pageFixture } from "../../logger/browserContextFixture";
import { page, context, browser } from "../Base_file";
import { PageManager } from "../../page-objects/base/PageMangager";
import { HomePage } from "../../page-objects/HomePage";
import { ContactUsPage } from "../../page-objects/ContactUsPage";

// import { setGlobalSettings } from "../utils/playwright-timeouts";

// //Load env variables from .env file
// import { config as loadEnv } from "dotenv"
// const env = loadEnv({ path: './env./env' });

// //Create a configuration object for easy access to env variables
// const config = {
//     headless: env.parsed?.HEADLESS === 'true',
//     browser: env.parsed?.UI_AUTOMATION_BROWSER || 'chromium',
//     width: parseInt(env.parsed?.BROWSER_WIDTH || '1920'),
//     height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080'),
// }

// //Create dictionary mapping browser names to their launch functions
// const browsers: { [key: string]: BrowserType } = {
//     'chromium': chromium,
//     'firefox': firefox,
//     'webkit': webkit
// };

// let browserInstance: Browser | null = null;

// async function initializeBrowserContext(selectedBrowser: string): Promise<Browser> {
//     const launchBrowser = browsers[selectedBrowser];
//     if(!launchBrowser) {
//         throw new Error(`Invalid browser selected: ${selectedBrowser}`);
//     }

//     return await launchBrowser.launch({ headless: config.headless});
// }

// async function initializePage(): Promise<void> {
//     if(!browserInstance) {
//         throw new Error('Browser instance is null');
//     }
//     pageFixture.context = await browserInstance.newContext({
//         ignoreHTTPSErrors: true
//     });
//     pageFixture.page = await pageFixture.context.newPage();
//     setGlobalSettings(pageFixture.page);
//     await pageFixture.page.setViewportSize({width: config.width, height: config.height});
// }

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

  this.pageManager = new PageManager();
  this.basePage = this.pageManager.createBasePage();
  this.homePage = this.pageManager.createHomePage();
  this.contactUsPage = this.pageManager.createContactUspage();
  this.loginPage = this.pageManager.createLoginPage();

});

//AfterAll hook: Runs once after all scenarios
AfterAll(async function () {
  await browser.instance?.close();
  console.log("\nFinished execution of test suite!");
  // process.exit(0); // Forces Node to kill all Chrome child processes
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
