function calcTax(amount) {
    return amount * 1.2;
}
function writeValue(product, price) {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}
let prices = [100, 50, 30];
let names = ["hat", "ball", "umbrella"];
writeValue(names[0], calcTax(prices[0]));
writeValue(names[1], calcTax(prices[1]));
writeValue(names[2], calcTax(prices[2]));
