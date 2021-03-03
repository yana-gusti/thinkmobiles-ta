Feature: Create and delete User API-test

    I add user to ThinkMobiles blog and after this i delete him )

 Scenario:SignUn, login, delete user
    When Try to registrate on TM site
    Then Confirm user on TM site
    When Try to login on TM site
    Then Delete user from TM site

