Feature: Ecommerce validations

    @Validation
    Scenario Outline: Placing the Order
        Given login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error message is displayed

        Examples:
            | username| password |
            | test1  | wrong_password1  |
            | test2  | wrong_password2  |
            | test3  | wrong_password3  |
            | test4  | wrong_password4  |