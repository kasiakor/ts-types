function calcPrice(quantity, price) {
    return quantity * price;
}
let total = calcPrice(2, 32);
console.log(`the total is ${total}`);
//enum: collection of values that is called by the name
var City;
(function (City) {
    City["London"] = "LON";
    City["Paris"] = "PAR";
    City["Chicago"] = "CHIC";
})(City || (City = {}));
//LON
console.log(City.London);
function getVal(input) {
    return [["Apple", 100, 2], ["Pear", true, 3]];
}
//alias can be used in type annotations
let result = getVal([["Lemon", 10, 1], ["Lime", true, 2]]);
console.log(`the result is ${result}`);
