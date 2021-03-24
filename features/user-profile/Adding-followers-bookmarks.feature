Feature: The ThinkMobiles Website

  Background:
      Given I am on the login page
      When I login with email : dantes.8ua8@gmail.com and password : lolyP0P11

  Scenario:1: As a user, I adding people who follow by me

    Then I go to ThinkMobiles main page
    Then I adding <user> who follow by me
    Then I delete my follower from followers list

   Examples:
    |user                 |
    | IT Path Solutions   |
    | July Mayer          |
    | Nataliya Tsyblienko |



  Scenario:2: As a user, I add post to bookmarks list
      Then I go to ThinkMobiles main page
      Then I adding post to bookmarks
      Then I delete post from bookmarks



