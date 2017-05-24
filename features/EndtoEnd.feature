Feature: End to end tests



  Scenario: Check the information links


    Given user is in home page
    When he goes to information link "Sitemap"
    Then he should see the heading "Sitemap"

