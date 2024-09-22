@login
Feature: Business rules

  Scenario Outline: do something
    Given I am on the HomePage
    Then The user enters <username> and password
    Then The user clicks on Login button
   
   Examples:
       | username |
       | standard_user |
       | problem_user |
       | visual_user |

    
