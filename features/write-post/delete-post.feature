Feature: The Write a post title testing

    Scenario Outline: The Delete post test
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And On Profile page click on the Drafts button
        And Click on the Delete post button
        And Get deletePopup
        Then Get succsessPopup