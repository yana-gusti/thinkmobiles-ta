Feature: The Review testing

    Scenario Outline: The Review test
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And On Profile page click on the Reviews and the Drafts buttons
        And Click on the Delete review button
        And Get deletePopup message
        Then Get succsessPopup message