import { BasePage } from "./base/BasePage";

let alertText: string;

export class LoginPage extends BasePage {
  //type a user name
  public async typeUsername(userName: string): Promise<void> {
    await this.page.getByRole("textbox", { name: "Username" }).fill(userName);
  }

  //type a password
  public async typePassword(password: string): Promise<void> {
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }

 //click on the login button
  public async clickOnLoginButton(): Promise<void> {

    await this.page.getByRole("button", { name: "Login" }).click();
  }

}
