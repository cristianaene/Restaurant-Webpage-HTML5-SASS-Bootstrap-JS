/** 
 * calculates customer invoice
 * 
 * @starterPrice - the price of an ordered starter
 * @maindishPrice - the price of an ordered main dish
 * @dessertPrice -the price of an ordered dessert
 * @beveragePrice - the price of an ordered beverage
 * returns the total of the invoice
 */
function calculateInvoice (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let total = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    return total.toFixed(2); // rounds the price to two decimals
}

// price definition

let bearGarlicMoussePrice = 12.90;
let musselsPrice = 20.90;
let churrosPrice = 7.90;
let craftBeerPrice = 6;

// function call
let invoice = calculateInvoice(bearGarlicMoussePrice, musselsPrice, churrosPrice, 2 * craftBeerPrice);

// printing the result in the console
console.log("Bill total: " + invoice + "\n  Thank you!");

// defining the prices of the remaining products dishes + drinks
let figgSaladPrice = 14.90;
let capreseSaladPrice = 15.00;
let salmonTartarePrice = 14.90;

let seaBreamPrice = 22.90;
let steakPrice = 32.00;
let vongolePrice = 25.00;

let cremeBruleePrice = 8.90;
let pancakesPrice = 7.90;
let strawberryMoussePrice = 12.00;

let coffeePrice = 5.00;
let fizzyLemonadePrice = 9.90;
let winePrice = 10.90;

// calling the function with different parameters
let invoice2 = calculateInvoice(figgSaladPrice, steakPrice, cremeBruleePrice, coffeePrice);
let invoice3 = calculateInvoice(capreseSaladPrice, seaBreamPrice, pancakesPrice,fizzyLemonadePrice);
let invoice4 = calculateInvoice(salmonTartarePrice, vongolePrice, strawberryMoussePrice,winePrice);

// printing the invoices in the console
console.log("Bill total: " + invoice2 + "\n  Thank you!");
console.log("Bill total: " + invoice3 + "\n  Thank you!");
console.log("Bill total: " + invoice4 + "\n  Thank you!");
