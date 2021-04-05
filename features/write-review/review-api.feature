Feature:API test

    Scenario Outline: API review

        Given Register on a site
        When Confirm email
        And Login on a site
        And Write a review
        And Delete a review
        # Then Delete a user