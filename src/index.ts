

// function calcTax(amount: any): any {
//     return `$${(amount * 1.2).toFixed(2)}`;
// }

//console.log(`Price is ${price}, full tax is ${fullTax}, and now half tax is ${halfTax}`);

let newResult: any = calcTax(100);
let myNumber: number = newResult;
// myNumber is a string
//console.log(`my number is ${myNumber}, and type of my number is ${typeof myNumber}`);

//TypeError: myNumber.toFixed is not a function
//console.log(myNumber.toFixed(2));


//DECLARE ANY TYPE
// Parameter 'amount' implicitly has an 'any' type.
function calcTax(amount): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}

let price = 100;
let fullTax = calcTax(price);
let halfTax = fullTax/2;

let stringVal = calcTax("Bob");
//NaN
console.log(stringVal);
console.log(`Price is ${price}, full tax is ${fullTax}, and now half tax is ${halfTax}`);


