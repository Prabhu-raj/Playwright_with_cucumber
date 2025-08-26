import { Given, When, Then, World } from "@cucumber/cucumber";
import { page, context, browser } from "./Base_file";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { CucumberWorld } from "./world/CucumberWorld";
import logger from "../logger/logger";


When("I type a First name", async function (this: CucumberWorld) {
    logger.info(`Base URL stored in Cucumber world: ${this.getURL()}`)
    // const fillFirstName = page.instance!.getByRole("textbox", { name: "First Name" });
    // await fillFirstName.fill("Prabhu");
    await this.contactUsPage.fillFirstName("Prabhu");

    // const fillFirstName = pageFixture.page.getByRole("textbox", { name: "First Name" });
    // await fillFirstName.fill("Prabhu");
})

When("I type a Last name", async function (this: CucumberWorld) {
    // const fillLastName = page.instance!.getByRole('textbox', { name: 'Last Name' });
    // await fillLastName.fill("Raj")
    await this.contactUsPage.fillLastName("Raj");

    // const fillLastName = pageFixture.page.getByRole('textbox', { name: 'Last Name' });
    // await fillLastName.fill("Raj")
})

When("I enter an Email address", async function (this: CucumberWorld) {
    // const fillEmail = page.instance!.getByRole('textbox', { name: 'Email Address' });
    // await fillEmail.fill("Prabhurajtest@gmail.com")
    await this.contactUsPage.fillEmailAddress("test@gmail.com");

    // const fillEmail = pageFixture.page.getByRole('textbox', { name: 'Email Address' });
    // await fillEmail.fill("Prabhurajtest@gmail.com")
    // await page.instance!.pause();
})

When("I type a Comment", async function (this: CucumberWorld) {
    // const fillComment = page.instance!.getByRole('textbox', { name: 'Comments' });
    // await fillComment.fill("Test comment");
    await this.contactUsPage.fillComment("Test comment");

    // const fillComment = pageFixture.page.getByRole('textbox', { name: 'Comments' });
    // await fillComment.fill("Test comment");
})

When("I click on the Submit button", async function (this: CucumberWorld) {
    // const subBtn = page.instance!.getByRole('button', { name: 'SUBMIT' })
    // await subBtn.click();
    await this.contactUsPage.clickOnSubmitButton();

    // const subBtn = pageFixture.page.getByRole('button', { name: 'SUBMIT' })
    // await subBtn.click();
})

Then('I should be presented with a successful contact us Submission message', async function (this: CucumberWorld) {
           // Waiting for the header text element
        // await page.instance!.waitForSelector('#contact_reply h1', {timeout: 60000});

        // // get the text from the h1 element
        // const text = await page.instance!.innerText('#contact_reply h1');

        // // Use the playwrihgt's 'expect' function to assert the text of the element
        // expect(text).toBe('Thank You for your Message!')
        // await page.instance!.pause();
        
        const successMessage = await this.contactUsPage.getSuccessfulMessage();
        expect(successMessage).toBe('Thank You for your Message!')
        });

Then('I should be presented with a unsuccessful contact us Submission message', async function (this: CucumberWorld) {
        //    // Waiting for the header text element
        // await page.instance!.waitForSelector('body', {timeout: 60000});

        // const bodyText = await page.instance?.innerText('body')

        // expect(bodyText).toMatch(/Error: all fields are required | Invalid email address/)

        const unsuccessfulMessage = await this.contactUsPage.getErrorMessage();
        expect(unsuccessfulMessage).toMatch(/Error: all fields are required | Invalid email address/)

        });


// Cucumber expressions
// When("I type a specific First name {string}", async (firstName: string) => {
//     const fillFirstName = page.instance!.getByRole("textbox", { name: "First Name" });
//     await fillFirstName.fill(firstName);
// })

When("I type a specific First name {string}", async function (this: CucumberWorld, firstName: string) {
    await this.contactUsPage.fillFirstName(firstName);
})

When("I type a specific Last name {word}", async function (this: CucumberWorld, lastName: string) {
    // const fillLastName = page.instance!.getByRole('textbox', { name: 'Last Name' });
    // await fillLastName.fill(lastName)

    await this.contactUsPage.fillLastName(lastName);
})

When("I enter a specific Email address {string}", async function (this: CucumberWorld, email: string) {
    // const fillEmail = page.instance!.getByRole('textbox', { name: 'Email Address' });
    // await fillEmail.fill(email)

    await this.contactUsPage.fillEmailAddress(email);
})

When("I type specific text {string} and a number {int} within the comment input field", async function (this: CucumberWorld, text: string, number: number) {
    // const fillComment = page.instance!.getByRole('textbox', { name: 'Comments' });
    // await fillComment.fill(`${text} ${number}`);

    await this.contactUsPage.fillComment(`${text} ${number}`);
})

// Random data Faker
When("I type a random First name", async function (this: CucumberWorld) {
    // const randomFirstName = faker.person.firstName();
    // await page.instance!.getByRole("textbox", { name: "First Name" }).fill(randomFirstName);

    const randomFirstName = faker.person.firstName();
    await this.contactUsPage.fillFirstName(randomFirstName);
})

When("I type a random Last name", async function (this: CucumberWorld) {
    // const randomLastName = faker.person.lastName();
    // await page.instance!.getByRole('textbox', { name: 'Last Name' }).fill(randomLastName);

    const randomLastName = faker.person.lastName();
    await this.contactUsPage.fillLastName(randomLastName);
})

When("I enter a random Email address", async function (this: CucumberWorld) {
    // const randomEmail = faker.internet.email();
    // await page.instance!.getByRole('textbox', { name: 'Email Address' }).fill(randomEmail);

    const randomEmail = faker.internet.email();
    await this.contactUsPage.fillEmailAddress(randomEmail);
})

// scrnario outlines
When("I Type a First name {word} and a Last name {word}", async function (firstName: string, lastName: string) {
    // await page.instance!.getByRole("textbox", { name: "First Name" }).fill(firstName);
    // await page.instance!.getByRole('textbox', { name: 'Last Name' }).fill(lastName);

    await this.contactUsPage.fillFirstName(firstName);
    await this.contactUsPage.fillLastName(lastName);
})

When("I type a Email address {string} and a comment {string}", async function (email: string, comment: string) {
    // await page.instance!.getByRole('textbox', { name: 'Email Address' }).fill(email);
    // await page.instance!.getByRole('textbox', { name: 'Comments' }).fill(comment);

    await this.contactUsPage.fillEmailAddress(email);
    await this.contactUsPage.fillComment(comment);
})


// Then("I should be Presented with header text {string}", async function (headerText: string) {
    // // Combine selectors with XPath OR
    // const locator = page.instance!.locator('//h1 | //body');

    // // Wait for either element to appear
    // await locator.first().waitFor({ state: "visible" });

    // // Get the visible element's text
    // const actualText = (await locator.first().innerText()).trim();

    // // Validate the text
    // expect(actualText).toBe(headerText);

// });

Then("I should be Presented with header text {string}", async function (message: string) {

    const headerText = await this.contactUsPage.getHeaderText(message)
    expect(headerText).toBe(headerText);
    
});