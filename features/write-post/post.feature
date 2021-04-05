Feature: The Write a post title testing

    Scenario Outline: The Write a post test
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And On Profile page click on the Drafts button
        And Click on the Write post button
        Then On the Write post page enter "<title>", "<content>" and click on the Save as a Draft button

        Examples:
            | title              | content |
            | Steps to reproduce | Step 1  |
            # | 12365              | gogo    |