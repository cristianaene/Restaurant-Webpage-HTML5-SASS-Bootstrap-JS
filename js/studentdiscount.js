// We assume that current js file is loaded after invoiceCalculator.js

/** 
 * calculates the student invoice after applying a 10% discount to ordered meals
 * 
 * @starterPrice - the price of an ordered starter
 * @maindishPrice - the price of an ordered main dish
 * @dessertPrice -the price of an ordered dessert
 * @beveragePrice - the price of an ordered beverage
 * returns the total of the invoice
 */
 function studentInvoice (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let totalMeals = starterPrice + maindishPrice + dessertPrice;
    let discount = totalMeals * 10 / 100;
    let dicountedInvoice = totalMeals - discount + beveragePrice;
    return dicountedInvoice.toFixed(2);
}


// function call for student discounted invoices
let studentInvoice1 = studentInvoice(figgSaladPrice, steakPrice, pancakesPrice, fizzyLemonadePrice);
console.log("Total: " + studentInvoice1  +  "\n  Thank you!");

let studentInvoice2 = studentInvoice(capreseSaladPrice, seaBreamPrice, cremeBruleePrice, craftBeerPrice);
console.log("Total: " + studentInvoice2  + "\n  Thank you!");

let studentInvoice3 = studentInvoice(salmonTartarePrice, vongolePrice, strawberryMoussePrice, coffeePrice);
console.log("Total: " + studentInvoice3  + "\n  Thank you!");
