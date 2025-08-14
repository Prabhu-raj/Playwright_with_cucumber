import { Page, BrowserContext, Browser, Expect } from "@playwright/test";
import { Given, Then, When } from "@cucumber/cucumber";

export const browser: { instance?: Browser } = {};
export const context: { instance?: BrowserContext } = {};
export const page: { instance?: Page } = {};
export const expect: { instance?: Expect } = {};

When("I switch to the new browser tab", async () => {
  page.instance = await context.instance!.waitForEvent("page");
  await page.instance.bringToFront();
});
