Feature: The ThinkMobiles Website

  Scenario Outline:1: I can't log into the website with not valid data

    Given I am on the login page
    When I enter not valid  <email> or <password>
    Then User see <message> error

    Examples:
      | email                | password | message                                          |
      | archy787ua@gmail.com | 1def     | The password field must be at least 6 characters |
      | d1def                | frd2kmr  | The email field must be a valid email            |
      |                      | frd2kmr  | The email field is required                      |
      | archy787ua@gmail.com | itsEmpty | The password field is required                   |
      |                      | itsEmpty | field is required                                |


  Scenario Outline:2: I can't log into the website with default data

    Given I am on the login page
    When I enter not valid  <email> or <password>
    Then Login button is disabled

    Examples:
      | email | password |
      | admin | admin    |
      | user  | user     |

  Scenario Outline:3: I can't log into the website with wrong data

    Given I am on the login page
    When I enter not valid  <email> or <password>
    Then Login button is disabled

    Examples:
      | email                                                                                                     | password                                                     |
      | archy787ua@gmail.com                                                                                      | lldksckvnjfnrfjndkcxnsllkfkesfmkdmsfkmlemskmfcssdlkefmsdfemc |
      | dantes.8uasdkcksdsdcsdcscsddddddddddddfffffffssssssdddddddfclkdsdcscmsfmcs8@smdcsdcgmaisdmcscmscmsdcl.com | pppword                                                      |
