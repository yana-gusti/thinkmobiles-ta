Feature: The ThinkMobiles login page

    Scenario Outline: As a user, I chek all links

      Given I am on the login page
      When I click on <link>
      Then I should see the new page with <title>

      Examples:
        | link                          | title                         |
     #   | "Login with Google account"   | Вход – Google Аккаунты     |
     #   | "Login with Facebook account" | Войдите на Facebook           |
        | "Login with Linkedin account" | Вход в LinkedIn               |
        | "Login with Github account"   | Sign in to GitHub · GitHub    |

  Scenario:2: As a user, I chek other links

    Given I am on the login page
    When As a user, I click on <link>
    Then I should see the new page with <title>

    Examples:
      | link           | title   |
      | Sign Up        | Sign-up |
      | Terms of Use   | Legal   |
      | Privacy policy | Legal   |
