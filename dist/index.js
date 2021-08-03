function calcTax(amount, discount) {
    return (amount * 1.2) - (discount || 0);
}
let taxValue = calcTax(260, 0);
console.log(`Tax value fgor 2 args is ${taxValue}`);
//Expected 2 arguments, but got 1
taxValue = calcTax(100);
console.log(`Tax value for 2 args including 1 optional is ${taxValue}`);
//Expected 2 arguments, but got 3
// taxValue = calcTax(260, 20, 30);
// console.log(`Tax value fgor 3 args is ${taxValue}`);
