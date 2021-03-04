Feature: Todo List
    
    @wip
    Scenario: Recording item
    
    Given John wants to use the application
    When he records "walk my cat"
    And he records "read a book"
    Then his list should contain
    | item_name   |
    | walk my cat |
    | read a book |

    