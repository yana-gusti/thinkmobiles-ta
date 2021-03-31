Feature: The ThinkMobiles Website
I changing user profile settings password and photo

  Scenario:1: I changing old password to new
     When I send request to change my password to new
     Then I try to login on TM site with new password
     When I send request to return my old password
     Then I try to login on TM site with old password

  Scenario:2: I changing old photo to new
     When I send request to change my old photo
     Then I send request to return my old photo

