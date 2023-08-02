@shopping
Feature:Shopping functionality

  Scenario Outline:  User is able to add and remove items from cart
    Given User is the home page
    When User add item and remove item
    Then items is removed
  
  Scenario: User buy item go checkout
    Given User is the home page
    When User buy two items
    Then User go to the checkout page
        