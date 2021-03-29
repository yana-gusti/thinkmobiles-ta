Feature: The ThinkMobiles Website

  Scenario Outline: As a user, I can log into the website
        Given I am on the login page
        When I login with <email> and <password>
        Then I should see the main page with My profile

    
        Examples:
            | email                | password  |
            | archy787ua@gmail.com | lolyP0P11 |

  # Scenario:1: As a user, I can log into the website with cheked Stay logged in chekbox

