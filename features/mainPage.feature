@mainPage
Feature: Main page feaure

  Scenario Outline: On Main page user add product to the cart
    Given I am on the HomePage
    Then The user enters <username> and password
    Then The user clicks on Login button
    When User on the main page
    Then User clicks on add to cart button
    Then User clicks on cart icon
    Then user verifies the item details

    Examples:
       | username |
       | standard_user |
       | problem_user |
       | visual_user |