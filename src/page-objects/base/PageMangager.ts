import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { page, context, browser } from "../../step-definitions/Base_file";
import { HomePage } from "../HomePage";
import { ContactUsPage } from "../ContactUsPage";
import { LoginPage } from "../LoginPage";
import { SignupPageReal } from "../SignupPageReal";

export class PageManager {

    get page(): Page {
        return page.instance!;
    }

    createBasePage(): BasePage {
        return new BasePage();
    }

    createHomePage() {
        return new HomePage();
    }

    createContactUspage() {
        return new ContactUsPage();
    }

    createLoginPage() {
        return new LoginPage();
    }

    createSignupPage() {
       return new SignupPageReal();
    }
}