Feature: WebdriverUniversity.com - Contact Us Page
    Scenario: Valid Contact Us Form Submission
        Given I navigate to the WebdriverUniversity homepage
        When I click on the Contact us button
        And I switch to the new browser tab
        And I type a First name
        And I type a Last name
        And I enter an Email address
        And I type a Comment
        And I click on the Submit button
        Then I should be presented with a successful contact us Submission message