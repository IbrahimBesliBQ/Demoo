@smoke
Feature: log out functionality 
    
    Scenario: user is able to log out from aplication
        Given Standard_user logged in
        When User log out from aplication
        Then User display loginBttn