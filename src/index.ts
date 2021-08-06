function calcPrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

//Argument of type '3' is not assignable to parameter of type '1 | 2'.
let total = calcPrice(3, 32);
console.log(`the total is ${total}`);