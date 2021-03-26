Feature: The Review testing

    Scenario Outline: The Review test
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And Open Review page
        And Click on the product and the Add video review
        And Check the filds about time using software
        And Check the rating breakdown "<q1>", "<q2>", "<q3>", "<q4>"
        And Fill the Your overall impression in one sentence field
        And Fill the "<linkTitle>", "<link>" fields
        And Clear all fields and save review
        #Then Get error message

        Examples:
            | q1 | q2 | q3 | q4 | linkTitle          | link                                        |
            | 1  | 4  | 5  | 4  | S09875642319;okhvq | https://www.youtube.com/watch?v=u9fOPV9Bitk |