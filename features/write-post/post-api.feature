Feature:API test

    Scenario Outline: API post

        Given Register on TM site
        When Confirm an email
        And Login on TM site
        And Write a post
        And Delete a post
        Then Delete a user by id