import { Given, Then, When } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { page, context, browser } from "./Base_file";
import { expect } from "@playwright/test";

let alertText: string;

When("I type a username {word}", async (userName) => {
  await page
    .instance!.getByRole("textbox", { name: "Username" })
    .fill(userName);
  await page.instance?.waitForTimeout(1000);
});

When("I type a password {word}", async (password) => {
  await page
    .instance!.getByRole("textbox", { name: "Password" })
    .fill(password);
  await page.instance?.waitForTimeout(1000);
});

When("I click on the login button", async () => {
  page.instance?.on("dialog", async (alert) => {
    alertText = alert.message();
    console.log(alertText);
    await alert.accept();
  });

  await page.instance!.getByRole("button", { name: "Login" }).click();
});

Then(
  "I should be presented with an alert box which contains text {string}",
  async (expectedAlertText: string) => {
    expect(alertText).toBe(expectedAlertText);
  }
);
