@smoke
Feature: Checkout and customer form fields

    Scenario: Checkout complete message displayed
    Given User is on the checkout page
    When User fill in all customer informations fields
    Then User should see finish message
    