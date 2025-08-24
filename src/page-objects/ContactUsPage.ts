import { BasePage } from "./base/BasePage";


export class contactUs extends BasePage {
    //type a first name
    public async fillFirstName(firstName: string): Promise<void> {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    //type a last name
    public async fillLastName(lastName: string): Promise<void> {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    //type am email address
    public async fillEmailAddress(emailAddress: string): Promise<void> {
        await this.page.getByPlaceholder('Email Address').fill(emailAddress);
    }

    //type a comment
    public async fillComment(comment: string): Promise<void> {
        await this.page.getByPlaceholder('Comments').fill(comment);
    }

    //click on submit button
    public async clickOnSubmitButton(): Promise<void> {
        await this.page.waitForSelector('input[value="SUBMIT"]');
        await this.page.click('input[value="SUBMIT"]');
    }

    //get successful message

    //get error page

    //get header text
}