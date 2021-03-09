Feature: The Write a post title testing

    Scenario Outline: The Write a post test
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And On Profile page click on the Drafts button
        And Click on the Write post button
        And On the Write post page enter "<title>"
        And Input content of "testData/testData.txt" into Content and save
        Then Expect errorMessage

    Examples:
            | title       |
            | Lorem isput |