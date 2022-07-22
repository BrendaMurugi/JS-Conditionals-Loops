// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"

class Fruits{
    constructor(orangePrice){
        this.orangePrice = orangePrice
        this.calculateFruitcost = function (fruitName, quantity){
            return `${quantity} ${fruitName} for KES ${orangePrice * quantity}.`
        }
    }
}
var orange = new Fruits(30.00)
console.log(orange.calculateFruitcost('orange',2));

// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
// and takes two parameters (fruit, quantity) when initialized i.e.
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the
// getTotalCost( ) method.
// kioskCalc.getTotalCost( ) // returns “2 orange for KES 60”

class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitsPriceList = {"orange": 30, "mango": 15, "avocado": 40}
        this.getTotalCost = () => {
            return `${this.quantity} ${this.fruit} for KES ${(this.fruitsPriceList.mango * this.quantity)}`
        }
    }
}
var orange = new KioskCalc("Mangoes", 3)
console.log(orange.getTotalCost());