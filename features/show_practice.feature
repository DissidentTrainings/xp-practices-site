Feature: View Practice
  As a workshop participant and webiste user
  I want to read about specific practices
  so that I know what it is about
  and I can decide if I want to have it in the workshop

  Scenario: View Pairprogrammig
    Given I surf to "/practices/pairprogramming.html"
    Then I should see a level 1 heading 'Pairprogramming'
    And a paragraph of text
    And a unordered list of links to external websites

  Scenario: Link to allies
    Given I surf to '/practices/pairprogramming.html'
    When I should see a list of allies
    Then the list of allies should contain 'Test Driven Development'
