import { Given, When } from "@cucumber/cucumber";
import { page, context, browser } from "./world";
// import { Page, BrowserContext, Browser, chromium } from "@playwright/test";

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

When("I type a First name", async () => {
    const fillFirstName = page.instance!.getByRole("textbox", { name: "First Name" });
    await fillFirstName.fill("Prabhu");
})

When("I type a Last name", async () => {
    const fillLastName = page.instance!.getByRole('textbox', { name: 'Last Name' });
    await fillLastName.fill("Raj")
    // await page.instance!.pause();
})