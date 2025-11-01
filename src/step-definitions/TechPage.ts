import { Given, When, Then } from "@cucumber/cucumber";
import { CucumberWorld } from "./world/CucumberWorld";


const url = "https://www.johnsonhealthtech.com/us/eng/contact-us";

Given("I navigate to JHT contatUs page", async function (this: CucumberWorld) {
    await this.basePage.navigate(url);
})

When("Select the topic", async function (this: CucumberWorld) {
    await this.techPage.selectTopic();
})

When("Type the first name", async function (this: CucumberWorld) {
    await this.techPage.fillFirstName();
})

When("Type the last name", async function (this: CucumberWorld) {
    await this.techPage.fillLastName();
})

When("Type the email address", async function (this: CucumberWorld) {
    await this.techPage.fillEmailAddress();
})

When("Type the phone number", async function (this: CucumberWorld) {
    await this.techPage.fillPhoneNumber();
})

When("Type the Mailing address", async function (this: CucumberWorld) {
    await this.techPage.fillMailingAddress();
})

When("Type the postal code", async function (this: CucumberWorld) {
    await this.techPage.fillPostalCode();
})

When("Type the city name", async function (this: CucumberWorld) {
    await this.techPage.fillCityName();
})

When("Select the region", async function (this: CucumberWorld) {
    await this.techPage.selectRegion();
})

When("Type the message", async function (this: CucumberWorld) {
    await this.techPage.fillMessage();
})

When("Upload an Image", async function (this: CucumberWorld) {
    await this.techPage.uploadImage();
})

When("Select Yes for confirmation to receive the text messages", async function (this: CucumberWorld) {
    await this.techPage.selectYesConfirmation();
})

When("Click on the submit button", async function (this: CucumberWorld) {
    await this.techPage.clickSubmitButton();
})

When("I should be presented with the confirmation message", async function (this: CucumberWorld) {
    await this.techPage.confirmationMessag();
})