Feature: The Write a post title testing

    Scenario Outline: The Edit post test on the Profile page with post
        Given On Login page
        When Log in with "panoramamiruz@gmail.com", "PanoramaMir007"
        And Open Review page with review and click the Edit review button
        And Change the filds about time using software
        And Change the rating breakdown "<q1>", "<q2>", "<q3>", "<q4>"
        And Add the new Your overall impression in one sentence field
        And Add the new "<linkTitle>", "<link>" fields
        And Save edit review
        Then Get edit succsess popup

        Examples:
            | q1 | q2 | q3 | q4 | linkTitle            | link                                        |
            | 5  | 2  | 5  | 2  | Sjfdhf45dfd1456kgddj | https://www.youtube.com/watch?v=Ti_gFEe1XNY |
            | 3  | 2  | 1  | 4  | 3259lkiuytczqdcvbn   | https://www.youtube.com/watch?v=9vJRopau0g0 |