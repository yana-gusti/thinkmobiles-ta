Feature: The TM Website

    Scenario Outline: As a user, I can click the link

        Given I am on the login page
        When I click the element ".auth-logo-image"
        Then Page title is equal to "ThinkMobiles"
#        Given I am on the login page
#        When I click the element ".auth-back-text"
#        Then Page title is equal to "ThinkMobiles"
        Given I am on the login page
        When I click the element "//*[contains(text(),'Terms of Use')]"
        Then Page title is equal to "Legal | ThinkMobiles"
        Given I am on the login page
        When I click the element "//*[contains(text(),'Privacy policy')]"
        Then Page title is equal to "Legal | ThinkMobiles"
