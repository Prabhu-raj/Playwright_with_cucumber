import { Given, When, Then } from "@cucumber/cucumber";
import { page, context, browser } from "./Base_file";
import { pageFixture } from "../hooks/browserContextFixture";
import { expect } from "@playwright/test";


When("I type a First name", async () => {
    const fillFirstName = page.instance!.getByRole("textbox", { name: "First Name" });
    await fillFirstName.fill("Prabhu");

    // const fillFirstName = pageFixture.page.getByRole("textbox", { name: "First Name" });
    // await fillFirstName.fill("Prabhu");
})

When("I type a Last name", async () => {
    const fillLastName = page.instance!.getByRole('textbox', { name: 'Last Name' });
    await fillLastName.fill("Raj")

    // const fillLastName = pageFixture.page.getByRole('textbox', { name: 'Last Name' });
    // await fillLastName.fill("Raj")
})

When("I enter an Email address", async () => {
    const fillEmail = page.instance!.getByRole('textbox', { name: 'Email Address' });
    await fillEmail.fill("Prabhurajtest@gmail.com")

    // const fillEmail = pageFixture.page.getByRole('textbox', { name: 'Email Address' });
    // await fillEmail.fill("Prabhurajtest@gmail.com")
    // await page.instance!.pause();
})

When("I type a Comment", async () => {
    const fillComment = page.instance!.getByRole('textbox', { name: 'Comments' });
    await fillComment.fill("Test comment");

    // const fillComment = pageFixture.page.getByRole('textbox', { name: 'Comments' });
    // await fillComment.fill("Test comment");
})

When("I click on the Submit button", async () => {
    const subBtn = page.instance!.getByRole('button', { name: 'SUBMIT' })
    await subBtn.click();

    // const subBtn = pageFixture.page.getByRole('button', { name: 'SUBMIT' })
    // await subBtn.click();
})

Then('I should be presented with a successful contact us Submission message', async () => {
           // Waiting for the header text element
        await page.instance!.waitForSelector('#contact_reply h1', {timeout: 60000});

        // get the text from the h1 element
        const text = await page.instance!.innerText('#contact_reply h1');

        // Use the playwrihgt's 'expect' function to assert the text of the element
        expect(text).toBe('Thank You for your Message!')
        // await page.instance!.pause();
        });
