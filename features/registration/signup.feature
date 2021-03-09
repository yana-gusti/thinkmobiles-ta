Feature: The TM Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I expect that element ".input-label" contains the text "First name" 
  
    Examples:
      | username       | password        | 
      | test@gmail.com | 12345!          |
      | test@gmail.com | abcdef          |
      | test@gmail.com | abc123          |
      | test@gmail.com | !@3$%^          |
      | test@gmail.com | aaa#$%          |
      | test@gmail.com | ab12$%          |
      | test@gmail.com | 123456789012345 |
      | test@gmail.com | abcdefghijklmno |