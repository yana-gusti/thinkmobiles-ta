Feature: The ThinkMobiles Website

  Scenario:1: As a user, I change user profile name
    Given I am on the login page
    When I login with <email> and <password>
    Then I should see the main page with My profile
    When I change current user name to new <name>
   Then I see message : <message-text>

    Examples:
      | email                 | password  |name       |  message-text   |
      | dantes.8ua8@gmail.com | lolyP0P11 | Capybara  |  Your first name was successfully changed! |


  Scenario:2: As a user, I change user profile description
    When I change current user description to new <descr>
    Then I see message : <message-text>

    Examples:
    |descr         |  message-text   |
    | DOOM_Player  |  Your status was successfully changed! |



  Scenario:3: As a user, I change user profile photo
    When I delete current user photo
    #Then I see message : Your photo has been successfully deleted!
    #When I add new user photo

