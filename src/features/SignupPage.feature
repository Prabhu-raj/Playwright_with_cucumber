@signupPage
Feature: Successfull login for Pei

    Scenario: Validate the signup page
    Given Navigate to the PEI web URL
    When Select how did you hear about us
    And Select LinkedIn
    And Enter forenames
    And Enter surname   
    And Enter email
    And Confirm email address
    And Confirm password
    And Select Yes for do you currently work with us
    And Select yes for receiving alers from the company
    And Select specific role inoformation
    And Select preferred location
    And Confirm the check box
    And Upload CV
    # And Click on Register button
    # Then I should be land on the registration process page