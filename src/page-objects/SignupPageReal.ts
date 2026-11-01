import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";
import { testUsers } from "../config/env";

export class SignupPageReal extends BasePage {
   
    public async selectreference (): Promise<void> {
        await this.page.waitForSelector('//select[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_InfluenceToApply"]')
        await this.page.locator('//select[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_InfluenceToApply"]').selectOption({index: 4});
    }

    public async selectLinkedIn (): Promise<void> {
        await this.page.waitForSelector('//select[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_InfluenceToApplyDetail"]')
        await this.page.locator('//select[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_InfluenceToApplyDetail"]').selectOption({index: 1});
    }

    public async fillForenames (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_FirstName"]').fill(testUsers.pei.firstName)

    }

    public async fillSurname (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_Surname"]').fill(testUsers.pei.lastName)

    }

    public async fillEmailAddress (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_Email"]').fill(testUsers.pei.email)

    }

    public async confirmEmailAddress (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_Email_Copy1"]').fill(testUsers.pei.email)

    }

    public async confirmPassword (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_Password_txtPassword"]').fill(testUsers.pei.password)

    }

    public async currentlyWorkWithUs (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_ctl46_CanC_IsEmployee_0"]').check();

    }

    public async jobAlerts (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_OccasionalContact_0"]').check();

    }

    public async specificRole (): Promise<void> {
        await this.page.locator('//select[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_PreferredIndustry2"]').selectOption({index: 10});

    }

    public async selectLocation (): Promise<void> {
        await this.page.locator('//select[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_CanC_PreferredLocation2"]').selectOption({index: 5});

    }

    public async checkBoxI (): Promise<void> {
        await this.page.locator('//input[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ITSRegistrationControl_ctl91_fcConsentSettings_ConsentOptionID"]').check()

    }

    public async uploadCV (): Promise<void> {
        await this.page.locator('//button[@id="ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ctl01_btnUpload"]').click();
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector('iframe[name^="fancybox-frame"]');

    // Get iframe (name might be dynamic so we use partial match)
    const frame = this.page.frames().find(f => f.name().startsWith('fancybox-frame'));

    if (!frame) {
        throw new Error("❌ Upload iframe not found. Test failed.");
    }

    // Upload file using input[type="file"]
    await frame.locator('#ctl00_FormContent_ctl00_radUploadfile0').setInputFiles('/Users/prabhuraj/Downloads/Prabhu_CV.pdf');

    await frame.locator('#ctl00_FormContent_ctl00_btnUpload').click();

    await expect(this.page.locator("//span[@id='ctl00_ctl00_ctl00_ContentContainer_mainContent_RegistrationHolder_ctl01_lblFileName']")).toContainText("Prabhu_CV.pdf")
    
}
}