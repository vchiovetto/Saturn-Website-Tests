Feature: Register

Scenario: Register
    Given that enter into the Saturn website
    When close the cookies alert
    And click in the profile icon
    And choose the to register option
    And type an invalid email 
    And click in the submit button
    Then an error message appear
