function calcPrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calcPrice(2, 32);
console.log(`the total is ${total}`);

//enum: collection of values that is called by the name
enum City {London = "LON", Paris = "PAR", Chicago = "CHIC"}

//type alias: custom type combination that is called by the name
type comboType = [string, number | true, 1 | 2 | 3 | City.London ][];

//LON
console.log(City.London);

function getVal(input: comboType): comboType {
    return [["Apple", 100, 2],["Pear", true, 3 ]];
}

//alias can be used in type annotations
let result: comboType = getVal([["Lemon", 10, 1],["Lime", true, 2 ]]);
console.log(`the result is ${result}`);


