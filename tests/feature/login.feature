Feature: navigate to the website and add products to cart 


Scenario:  Browse Firebaseapp and add/delete products to and from cart 

Given  I navigate to the website
When I click the size options
Then  I validate the results are showing the criteria you selected.
When I Add a product to the cart
Then I validate it is there
When I Remove a product from the cart
Then I validate it is not there.
When I click size S 
When I Add more than one product to the cart
Then I validate the total price is correct.
When I Complete the purchase 
Then I validate my purchase is succesfull
