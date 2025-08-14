@regression @login
Feature: Webdriveruniversity - Login Page

        Background: Preconditions
        Given I navigate to the WebdriverUniversity homepage
        When I Click on the Login Portal button
        And I switch to the new browser tab
        
    @smoke
    Scenario Outline: Validate valid & invalid login
        # Given I navigate to the webdriveruniversity Login page
        And I type a username <username>
        And I type a password <password>
        And I click on the login button
        Then I should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |
