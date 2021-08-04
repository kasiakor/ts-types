function calcTax(amount, discount = 10, ...extraFees) {
    return (amount * 1.2) - discount +
        extraFees.reduce((total, value) => total + value, 0);
}
let taxValue = calcTax(100, 0);
console.log(`Tax value is ${taxValue}`);
