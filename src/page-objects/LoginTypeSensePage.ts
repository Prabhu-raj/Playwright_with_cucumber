import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class LoginTypeSensePage extends BasePage {
  
  public async clickOnButton(): Promise<void> {
    await this.page.getByRole("link", { name: "login" }).click();
    await this.page.waitForTimeout(3000);
  }

  public async fillemail(): Promise<void> {
    await this.page
      .getByRole("textbox", { name: "Email *" })
      .fill("prabhurajpudi@gmail.com");
  }

  public async fillPassword(): Promise<void> {
    await this.page
      .getByRole("textbox", { name: "Password *" })
      .fill("Typesense@1234");
  }

  public async clickTypesenseLoginButton(): Promise<void> {
    await this.page.getByRole("button", { name: "Log in" }).click();
  }

//   public async toHaveUrl(): Promise<void> {
//     console.log("🔍 Checking URL...");
//     await this.page.waitForURL("https://cloud.typesense.org/clusters", { timeout: 15000 });
//     await expect(this.page).toHaveURL("https://cloud.typesense.org/clusters");
//     console.log("🌐 URL verified successfully");
//   }
}
