function calcTax(amount) {
    return amount * 1.2;
}
function writeValue(product, price) {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}
let prices = [100, 50, 30];
let names = ["hat", "ball", "umbrella"];
prices.forEach((price, index) => (writeValue(names[index], calcTax(price))));
