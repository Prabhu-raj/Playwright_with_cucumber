@signupReal
Feature: Successfull login for Real

    Scenario: Validate the signup page
    Given I navigate to the Real web URL
    When I click on the Join Real
    And Enter the firstName
    And Enter the lastName
    And Enter username
    And Enter email
    And select the country
    And Enter the password
    And Renter the password confirmation
    And Confirm the check boxI
    And Confirm the second check boxII
    And Click on the Create Account
    Then I should be land on the registration process page