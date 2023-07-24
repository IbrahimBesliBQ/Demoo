Feature: reset functionality
    
    Scenario: User is able to reset application state - clear basket icon
        GivenStandard_user logged in
        WhenUser add item and reset application state
        ThenItem is not selected
    