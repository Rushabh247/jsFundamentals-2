// Function to find the product with the maximum price and the minimum price
function findMinMaxProducts(products) {
    var maxProduct = null;
    var minProduct = null;
    var maxPrice = Number.NEGATIVE_INFINITY;
    var minPrice = Number.POSITIVE_INFINITY;


    for (var i = 0; i < products.length; i++) {
        var price = products[i].price;
        if (price > maxPrice) {
            maxPrice = price;
            maxProduct = products[i];
        }
        if (price < minPrice) {
            minPrice = price;
            minProduct = products[i];
        }
    }

    
    console.log("Product with the maximum price:");
    console.log(maxProduct);


    console.log("Product with the minimum price:");
    console.log(minProduct);
}

// Example usage:
var products = [
    { name: "Laptop", price: 1500 },
    { name: "Smartphone", price: 800 },
    { name: "Headphones", price: 100 },
    { name: "Tablet", price: 1200 }
];


findMinMaxProducts(products);
