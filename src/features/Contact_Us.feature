@regression @contact-us
Feature: WebdriverUniversity.com - Contact Us Page

    Background: Preconditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the Contact us button
        And I switch to the new browser tab

    Scenario: Valid Contact Us Form Submission
        And I type a First name
        And I type a Last name
        And I enter an Email address
        And I type a Comment
        And I click on the Submit button
        Then I should be presented with a successful contact us Submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a First name
        And I type a Last name
        # And I enter an Email address
        And I type a Comment
        And I click on the Submit button
        Then I should be presented with a unsuccessful contact us Submission message

    Scenario: Valid Contact Us Form Submission - Using Specific Data
        And I type a specific First name "Prabhu"
        And I type a specific Last name "Raj"
        And I enter a specific Email address "prabhu@example.com"
        And I type specific text "Hello world" and a number 2 within the comment input field
        And I click on the Submit button
        Then I should be presented with a successful contact us Submission message

    Scenario: Valid Contact Us Form Submission - Using Random data
        And I type a random First name
        And I type a random Last name
        And I enter a random Email address
        And I type a Comment
        And I click on the Submit button
        Then I should be presented with a successful contact us Submission message

    @smoke @ignore
    Scenario Outline: Validate Contact Us Page
        And I Type a First name <firstName> and a Last name <lastName>
        And I type a Email address '<emailAddress>' and a comment '<comment>'
        And I click on the Submit button
        Then I should be Presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress              | comment                 | message                      |
            | John      | Jones    | john_jones@example.com    | Hello world?            | Thank You for your Message!  |
            | Mia       | Carter   | mia_carter123@example.com | Test123 Test123         | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson              | Do you create websites? | Error: Invalid email address |
