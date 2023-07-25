 @smoke
Feature: Login functionality 
    
     Scenario Outline: User is able to login successfully
        
        When User login with <username> and <password>
        Then User is logged in

    Examples:
        |username     |password     |
        |standard_user|secret_sauce |
        |problem_user|secret_sauce |
        
   
    Scenario: User is login with invalid username and invalid password
        When User login with invalid <username> and invalid <password>
        Then User is not logged in

        Examples:
            |username |password | 
            |invalid  |invalidpass  |
            


    