@smoke
Feature: log out functionality 
    
    Scenario: user is able to log out from aplication
        GivenStandard_user logged in
        WhenUser log out from aplication
        ThenUser display loginBttn