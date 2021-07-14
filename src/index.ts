//console.log("Hello from TypeScript");

let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Gia";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);


// static type annotaion
function calcTax(amount: number) {
    return (amount * 1.2).toFixed(2);
}

//14.39999
console.log(`${12} = ${calcTax(12)}`);
//NaN
//console.log(`${"Gia"} = ${calcTax("Gia")}`);
//1.2 - true is 1
//console.log(`${true} = ${calcTax(true)}`);

let price = 100;
let fullTax = calcTax(price);
let halfTax = fullTax/2;

console.log(`Price is ${price}, full tax is ${fullTax}, and now half tax is ${halfTax}`);
