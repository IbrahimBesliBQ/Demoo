@smoke
Feature: reset functionality
    
    Scenario: User is able to reset application state - clear basket icon
        Given Standard_user logged in
        When User add item and click reset App state button
        Then Item is not selected
    