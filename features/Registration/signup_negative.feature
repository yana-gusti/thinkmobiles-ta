Feature: The TM Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I expect that element ".input-label" contains the text "First name"

    Examples:
      | username       | password |
      | test           | [null]   |
      | test@gmail.com | 12345    |
      | test@gmail.com | abcde    |
