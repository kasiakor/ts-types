function calcTax(amount) {
    return amount * 1.2;
}
function writeValue(product, price) {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["hat", 50];
let ball = ["ball", 35];
writeValue(hat[0], hat[1]);
writeValue(ball[0], ball[1]);
