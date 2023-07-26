Feature: Ecommerce validations

    Scenario: Placing the Order
        Given a login to Ecommerce application with "rahulshetty@gmail.com" and "Iamking@000"
        When add "iphone 13" to Cart
        Then Verify "iphone 13" is displayed in the Cart
        When Enter valid details and Place the Order
        Then Verify order in preset in the OrderHistory