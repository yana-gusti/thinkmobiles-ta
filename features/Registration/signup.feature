Feature: The TM Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I expect that element ".input-label" contains the text "First name" 
  
    Examples:
      | username       | password        | 
      | test9@gmail.com | 12345!          |
      | test9@gmail.com | abcdef          |
      | test9@gmail.com | abc123          |
      | test9@gmail.com | !@3$%^          |
      | test9@gmail.com | aaa#$%          |
      | test9@gmail.com | ab12$%          |
      | test9@gmail.com | 123456789012345 |
      | test9@gmail.com | abcdefghijklmno |