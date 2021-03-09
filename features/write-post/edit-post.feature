Feature: The Write a post title testing

    Scenario Outline: The Edit post test on the Profile page with post
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And On Profile page click on the Drafts button
        And Edit "<publicationTitle>" and "<publicationContent>"
        Then Get popup

        Examples:
            | publicationTitle | publicationContent |
            | Steps to upddate | A lot of steps     |
            | Upper              | Step               |