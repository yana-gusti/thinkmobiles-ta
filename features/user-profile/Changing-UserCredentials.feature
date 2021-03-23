Feature: The ThinkMobiles Website

  Scenario:1: As a user, I change user profile name
    Given I am on the login page
    When I login with email : dantes.8ua8@gmail.com and password : lolyP0P11
    Then I should see the main page with My profile
    When I change current user name to new <name>
   Then I see message : <message-text>

    Examples:
      | name      |  message-text   |
      | Capybara  |  Your first name was successfully changed! |


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

