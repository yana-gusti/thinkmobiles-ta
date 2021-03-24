Feature: The ThinkMobiles Website

  Background:
      Given I am on the login page
      When I login with email : dantes.8ua8@gmail.com and password : lolyP0P11

  Scenario Outline:1: As a user, I adding social links to my profile
    Then I add <link> to social <item>

   Examples:
    |link                                                   | item       |
    | https://www.facebook.com/profile.php?id=1             |  facebook  |
    | https://twitter.com/?lang=uk7                         |  twitter   |
    | https://www.linkedin.com/in/%D0%B                     |  linkedin  |
    | https://www.behance.net/galleries?tracking_source=nav |  behance   |
    | https://www.instagram.com/e8du8ard_m                  |  instagram |
    | https://www.youtube.com/channel/UCASelRybJDqlS        |  youtube   |
    | https://www.pinterest.com/dcsdc                       |  pinterest |
    | https://www.dribbble.com/cdcdvfv                      |  dribbble  |
    | https://github.com/D8ane8s109                         |  github    |


#  Scenario Outline:2: As a user, I adding not valid social links to my profile
#    Then I add wrong <link> to social <item>
#    Then I see error message
#
#   Examples:
#    |link                                                   | item       |
#    | -----                                                 |  facebook  |
#    | 2342342340                                            |  twitter   |
#    | dfvrdffs                                              |  linkedin  |
#    | выиукмвапрк                                           |  behance   |
#    | "№;%;№%%565"                                          |  instagram |
#    | null                                                  |  youtube   |
#    | admin                                                 |  pinterest |
#    | user                                                  |  dribbble  |
#    | LINK                                                  |  github    |