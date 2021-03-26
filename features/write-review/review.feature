Feature: The Review testing

    Scenario Outline: The Review test
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And Open Review page
        And Click on the product and the Add video review
        And Check the filds about time using software
        And Check the rating breakdown "<s1>", "<s2>", "<s3>", "<s4>"
        And Fill the Your overall impression in one sentence field
        And Fill the "<linkTitle>", "<link>" fields
        Then Click on the Save as draft button

        Examples:
            | s1 | s2 | s3 | s4 | linkTitle       | link                                        |
            | 4  | 2  | 5  | 4  | 0123456789abcde | https://www.youtube.com/watch?v=7zyUjCnPNjk |