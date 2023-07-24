 @smoke 
Feature: Login functionality 
 
     Scenario Outline: User is able to login successfully
        
        WhenUser login with <username> and <password>
        ThenUser is logged in

    Examples:
        | username                | password     |
        | standard_user           | secret_sauce |
        | problem_user            | secret_sauce |
        
    
    Scenario: User is login with invalid username and invalid password
        WhenUser login with invalid <username> and invalid <password>
        ThenUser is not logged in

        Examples:
            | username | password | 
            | invalid  | invalidpass  |
            


    