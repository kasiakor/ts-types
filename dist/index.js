function calcTax(amount) {
    return amount * 1.2;
}
function writeValue(product, price) {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["hat", 50];
let ball = ["ball", 35];
let products = [["hat", 50], ["ball", 35]];
let tupleUnion = [true, false, hat, ...products];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        elem.forEach((item) => {
            if (typeof item === "string") {
                console.log(`string: ${item}`);
            }
            else {
                console.log(`number: ${item}`);
            }
        });
    }
    else if (typeof elem === "boolean") {
        console.log(`boolean: ${elem}`);
    }
});
