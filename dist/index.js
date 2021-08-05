function calcTax(amount) {
    return amount * 1.2;
}
function writeValue(product, price) {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["hat", 50];
let ball = ["ball", 35];
hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`string: ${h}`);
    }
    else {
        console.log(`number: ${h}`);
    }
});
