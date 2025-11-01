import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";


export class HomePage extends BasePage {
    //Specific methods for the Homepage
    public async clickOnContactUsButton(): Promise<void> {
        await this.waitAndClickByRole("link", "Contact Us Form");
    }

    public async clickOnLoginPortalButton(): Promise<void> {
        await this.waitAndClickByRole("link", "Login Portal");
    }
}

export class SignupPageReal extends BasePage {

    public async clickOnRealButton(): Promise<void> {
        await this.page.getByRole('link', { name: 'Join Real' }).click();
    }

    public async fillFirstName(): Promise<void> {
        await this.page.getByTestId('firstName').fill("Test");
    }

    public async fillLastName(): Promise<void> {
        await this.page.getByTestId('lastName').fill("real");
    }

    public async fillUserName(): Promise<void> {
        await this.page.getByTestId('username').fill("Testreal");
    }

    public async fillEmail(): Promise<void> {
        await this.page.getByTestId('emailAddress').fill("Testreal7@gmail.com");
    }

    public async selectCountry(): Promise<void> {
        await this.page.getByTestId('country').click(); this.page.getByRole('option', { name: 'United States' }).click();
    }

    public async fillPassword(): Promise<void> {
        await this.page.getByTestId('password').fill("Testtest@1234");
    }

    public async reFillPassword(): Promise<void> {
        await this.page.getByTestId('confirmPassword').fill("Testtest@1234");
    }

    public async checkBoxI(): Promise<void> {
        await this.page.getByRole('checkbox', { name: 'terms' }).check();
    }

    public async checkBoxII(): Promise<void> {
        await this.page.getByRole('checkbox', { name: 'permission' }).check();
    }

    public async createAccount(): Promise<void> {
        await this.page.getByRole('button', { name: 'Create Account' }).click();
    }

    public async registrationPage(): Promise<void> {
        await expect(this.page).toHaveURL("https://bolt.playrealbrokerage.com/onboarding/application-form");
    }


}
