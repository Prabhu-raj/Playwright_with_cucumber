import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { page, context, browser } from "../../step-definitions/Base_file";
import { HomePage } from "../HomePage";
import { contactUs } from "../ContactUsPage";

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
        return new contactUs();
    }
}