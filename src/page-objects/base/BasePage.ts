import { Page, Locator } from "@playwright/test";
import { page, context, browser } from "../../step-definitions/Base_file";

//Load env variables from .env file
import { config as loadEnv } from "dotenv";
const env = loadEnv({ path: "./env/.env" });

export class BasePage {
  getByRole: any;
  get page(): Page {
    return page.instance!;
  }

  //Promise<void> in TypeScript when you’re defining an async function that doesn’t explicitly return a value.
  public async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.getByRole('button', { name: 'Allow all cookies' }).click()
  }

  public async waitAndClickByRole(role: string, name: string): Promise<void> {
    const element = await this.page.getByRole(role as any, { name: name });
    await element.click();
  }

  // Wait for the locator to be visible and then click on it
  public async waitAndClick(locator: Locator): Promise<void> {
    await locator.isVisible();
    await locator.click();
  }

  // Wait for the selector to be visible and then click on it
  public async waitAndClickSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }

  public async switchToNewTab(): Promise<void> {
    // await this.page.instance!.context().waitForEvent("page"); //reintialise the page > new tab > page
    await context.instance!.waitForEvent("page")

    //Retrieve all current open pages (tabs)
    const allPages = await context.instance!.pages();

    //Assign the most recent tab to pageFixture.page
    page.instance = allPages[allPages.length - 1];

    //Bring the newly assigned tab to the front (Make it active)
    await this.page.bringToFront(); 

    // //Ensure the newly assigned tab is also fully maximised
    // await this.page.setViewportSize({
    //   width: config.width,
    //   height: config.height,
    // });
  }
}
