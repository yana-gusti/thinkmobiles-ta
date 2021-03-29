Feature: The ThinkMobiles Website
I changing user profile settings

  Scenario:1: I changing old password to new
     When I send request to change my password to new
     Then I try to login on TM site with new password
     When I send request to return my old password
     Then I try to login on TM site with old password

