function calcTax(amount, discount = 10, ...extraFees) {
    return (amount * 1.2) - discount +
        extraFees.reduce((total, value) => total + value, 0);
}
function writeValue(label, value) {
    console.log(`label: ${label}, value: ${value}`);
}
writeValue("Tax value is ", calcTax(60, 0));
