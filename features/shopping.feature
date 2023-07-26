@smoke
Feature: Shopping functionality

   Scenario:Shopping:User buy two items go checkout page
        
        GivenUser is the home page
        WhenUser buy two items
        ThenUser go to the checkout page 

   Scenario: User is able to add and remove items from cart
        GivenUser is the home page 
        WhenUser add item and remove item 
        Thenitems is removed
  
   Scenario
   GivenUser is the home page
   WhenUser buy two items
   ThenUser should see two item in checkout page

        