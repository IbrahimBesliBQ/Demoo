@smoke
Feature: Shopping functionality

   Scenario:Shopping User buy two items go checkout page
        
     Given User is the home page
     When User buy two items
     Then User go to the checkout page 

   Scenario: User is able to add and remove items from cart
     Given User is the home page 
     When User add item and remove item 
     Then items is removed
  
   Scenario
     Given User is the home page
     When User buy two items
     Then User should see two item in checkout page

        