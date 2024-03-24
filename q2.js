// Function to calculate the total sum of product prices in the customer's cart
function calculateTotalCost(prices) {
    var totalCost = 0;

 
    for (var i = 0; i < prices.length; i++) {
        totalCost += prices[i];
    }

    return totalCost;
}

// Example 
var cartPrices = [10, 20, 30, 15, 25];


var totalCost = calculateTotalCost(cartPrices);
console.log("Total cost of the customer's shopping cart: $" + totalCost);
