
Feature: Successful Login into typesense dashboard

    Scenario: Log into typesense dashboard with valid credentials
        Given I navigate to the typeSense URL
        When I click on the ts Login button
        When I enter a valid email
        When I enter a valid password 
        When I click on the typeSense Login button
        # Then I should be land on the typeSense home page