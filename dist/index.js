// function calcTax(amount: any): any {
//     return `$${(amount * 1.2).toFixed(2)}`;
// }
//console.log(`Price is ${price}, full tax is ${fullTax}, and now half tax is ${halfTax}`);
// let newResult: any = calcTax(100);
// let myNumber: number = newResult;
// myNumber is a string
//console.log(`my number is ${myNumber}, and type of my number is ${typeof myNumber}`);
//TypeError: myNumber.toFixed is not a function
//console.log(myNumber.toFixed(2));
//DECLARE ANY TYPE
// Parameter 'amount' implicitly has an 'any' type.
// explicit use of any
// function calcTax(amount: any): any {
//     return `$${(amount * 1.2).toFixed(2)}`;
// }
// let price = 100;
// let fullTax = calcTax(price);
// let halfTax = fullTax/2;
// let stringVal = calcTax("Bob");
// //NaN
// console.log(stringVal);
// console.log(`Price is ${price}, full tax is ${fullTax}, and now half tax is ${halfTax}`);
//type unions
// function calcTax2(amount: number, format: boolean): number | string {
//     const calcAmount = amount * 1.2;
//     return format ? `$${(calcAmount).toFixed(2)}`: calcAmount;
// }
// let taxNumber = calcTax2(100, false);
// console.log(`tax number: ${taxNumber}, ${typeof taxNumber}`);
// let taxString = calcTax2(200, true);
// console.log(`tax number: ${taxString}, ${typeof taxString}`);
//code below produces compiler error
// function calcTax2(amount: number, format: boolean): string | number {
//     const calcAmount = amount * 1.2;
//     return format ? `$${(calcAmount).toFixed(2)}`: calcAmount;
// }
// let taxNumber: string | number = calcTax2(100, false);
// console.log(`tax number: ${taxNumber.toFixed(2)}, ${typeof taxNumber}`);
// let taxString: string | number = calcTax2(200, true);
// console.log(`tax string: ${taxString.charAt(0)}, ${typeof taxString}`);
// use of type assertion, compiler applies types
function calcTax3(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${(calcAmount).toFixed(2)}` : calcAmount;
}
//let taxNumber: number
let taxNumber = calcTax3(100, false);
console.log(`tax number: ${taxNumber.toFixed(2)}, ${typeof taxNumber}`);
//let taxString: string
let taxString = calcTax3(200, true);
console.log(`tax number: ${taxString.charAt(1)}, ${typeof taxString}`);
//let taxBoolean: boolean
//assereted as a boolean but when executed produces a number
let taxBoolean = calcTax3(200, false);
console.log(`tax number: ${taxBoolean}, ${typeof taxBoolean}`);
// never type use when the types have been used exhaustively
// sth to went wrong if default
let taxValue = calcTax3(100, false);
switch (typeof taxValue) {
    case "number":
        {
            `tax number: ${taxNumber.toFixed(2)}`;
        }
        ;
        break;
    case "string":
        {
            `tax number: ${taxString.charAt(1)}`;
        }
        ;
        break;
    default:
        let value = taxValue;
        console.log(`Unexpected type for value, never type ${typeof value}`);
}
