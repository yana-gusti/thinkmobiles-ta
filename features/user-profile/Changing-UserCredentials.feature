Feature: The ThinkMobiles Website
  Background:
     Given I am on the login page
       When I login with <email> and <password>

  Scenario :1: As a user, I change user profile name , email , password

    #Given I am on the login page
    #When I login with <email> and <password>
    Then I should see the main page with My profile
    When I change current user name to new <name>
    Then I see message <message-text>

    Examples:
      | email                 | password  |name       |  message-text   |
     | dantes.8ua8@gmail.com | lolyP0P11 | Capybara  |  Your first name was successfully changed! |


  Scenario:2: As a user, I change user profile description

    #Given I am on the login page
   # When I login with <email> and <password>
    Then I should see the main page with My profile
    When I change current user description to new <descr>
    Then I see message <message-text>

    Examples:
      | email                 | password  |descr         |  message-text   |
      | dantes.8ua8@gmail.com | lolyP0P11 | DOOM_Slayer  |  Your status was successfully changed! |
