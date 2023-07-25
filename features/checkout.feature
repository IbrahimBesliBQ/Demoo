@smoke
Feature: Checkout and customer form fields

    Scenario: Checkout complete message displayed
    GivenUser is on the checkout page
    WhenUser fill in all customer informations fields
    ThenUser should see finish message
    