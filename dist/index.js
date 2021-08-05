function calcTax(amount) {
    return amount * 1.2;
}
function writeValue(product, price) {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}
var Product;
(function (Product) {
    Product[Product["Ribbon"] = 0] = "Ribbon";
    Product[Product["Scarf"] = 1] = "Scarf";
    Product[Product["Bracelet"] = 2] = "Bracelet";
})(Product || (Product = {}));
//enum used in a tuple
let products = [[Product.Ribbon, 42], [Product.Scarf, 28]];
products.forEach((prod) => {
    //enum used in a switch statement
    switch (prod[0]) {
        case Product.Ribbon:
            writeValue("Ribbon", calcTax(prod[1]));
            break;
        case Product.Scarf:
            writeValue("Scarf", calcTax(prod[1]));
            break;
    }
});
//each enum value has a corresponding number value: 0,1,2
[Product.Ribbon, Product.Scarf, Product.Bracelet].forEach(val => {
    console.log(`Value: ${val}`);
});
