Feature: The TM Website

  Scenario Outline: As a user, I can log into the secure area and leave a review

    Given I am on the login page
    When I login with <username> and <password>
    Then I expect to see a Main page
    Then Pick Reviews in menu
    Then Click Leave a review link
    Then Find an EnPass application
    Then Click a Review button
    Then Fill in term of use
    Then Fill in an app rating
    Then Input an overall impression from "impression.txt"
    Then Input a Review description from "review.txt"
    Then Save as a draft


    Examples:
      | username                     | password         |
      | mykhaylo.andryshyn@gmail.com | Andryshyn123     |