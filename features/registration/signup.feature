Feature: The TM Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I expect that element ".input-label" contains the text "First name" 
  
    Examples:
      | username       | password        | 
      | test6@gmail.com | 12345!          |
      | test6@gmail.com | abcdef          |
      | test6@gmail.com | abc123          |
      | test6@gmail.com | !@3$%^          |
      | test6@gmail.com | aaa#$%          |
      | test6@gmail.com | ab12$%          |
      | test6@gmail.com | 123456789012345 |
      | test6@gmail.com | abcdefghijklmno |