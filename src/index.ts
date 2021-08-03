function calcTax(amount: number, discount: number = 10, ...extraFees: number[]) {
    return (amount * 1.2) - discount + 
    extraFees.reduce((total, value) => total + value, 0);
}

let taxValue = calcTax(260, 0);
console.log(`Tax value for 2 args is ${taxValue}`);

//Expected 2 arguments, but got 1 opt with default value
// param with default value is optional
taxValue = calcTax(100);
console.log(`Tax value for 2 args including 1 optional is ${taxValue}`);

//2 arguments and rest params
taxValue = calcTax(100, 20, 10, 40, 70);
console.log(`Tax value for args with rest params is ${taxValue}`);