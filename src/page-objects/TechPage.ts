import { BasePage } from "./base/BasePage";
import { expect } from "@playwright/test";

export class TechPage extends BasePage {

    public async selectTopic(): Promise<void> {
    //    await this.page.locator('brand-form-select').filter({ hasText: 'TopicCareersVerification of' }).locator('#topic').click();
    //    await this.page.keyboard.type("Marketing/Media");
    //    await this.page.keyboard.press('Enter');
    await this.page.locator('//select[@id="topic"]').selectOption({index: 4});
   }


   public async fillFirstName(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'First Name *' }).fill('Test First name')
   }


   public async fillLastName(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'Last Name *' }).fill('Test Last name')
   }


   public async fillEmailAddress(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'Email Address *' }).fill('Test@mail.com')
   }


   public async fillPhoneNumber(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'Phone Number *' }).fill('0000000000')
   }


   public async fillMailingAddress(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'Mailing Address *' }).fill('Test mail address')
   }


   public async fillPostalCode(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'Postal Code *' }).fill('Test Postal code')
   }


   public async fillCityName(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'City *' }).fill('Test city name')
   }


   public async selectRegion(): Promise<void> {
       await this.page.getByLabel('Region', { exact: true }).click();
       await this.page.keyboard.type("India");
       await this.page.keyboard.press('Enter');
   }


   public async fillMessage(): Promise<void> {
       await this.page.getByRole('textbox', { name: 'Message' }).fill('Test message')
   }


   public async uploadImage(): Promise<void> {
       await this.page.getByRole('button', { name: 'Upload an attachment (' }).setInputFiles("/Users/prabhuraj/Documents/file_example_PNG_3MB.png")
   }


   public async selectYesConfirmation(): Promise<void> {
       await this.page.getByText('Yes').click();
   }


   public async clickSubmitButton(): Promise<void> {
       await this.page.once("dialog", async dialog => {
        await expect(dialog.message()).toMatch("Thanks for submitting")
        await dialog.accept();
       })
       await this.page.getByRole('button', { name: 'SUBMIT' }).click();
   }


   public async confirmationMessag(): Promise<void> {
       await expect(this.page.locator("//h2[normalize-space()='Thank You']")).toHaveText("THANK YOU");
   }

}