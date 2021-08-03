function calcTax(amount) {
    return amount * 1.2;
}

let taxValue = calcTax(260);
console.log(`Tax value is ${taxValue}`);
       
function calcTaxDisc(amount, discount) {
    return calcTax(amount) - discount;
}

let taxValDisc = calcTaxDisc(100, 30)
console.log(`Tax value with discount is ${taxValDisc}`);