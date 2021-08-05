function calcTax(amount: number): number {
        return amount * 1.2;
}

function writeValue(product: string, price: number): void {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["hat", 50];
let ball: [string, number] = ["ball", 35];

let products: [string, number][] = [["hat", 50],["ball", 35]];
let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

tupleUnion.forEach((elem: [string, number] | boolean) => {
    if (elem instanceof Array) {
        elem.forEach((item: string | number ) => {
            if(typeof item === "string") {
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