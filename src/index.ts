function calcTax(amount: number): number {
        return amount * 1.2;
}

function writeValue(product: string, price: number): void {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["hat", 50];
let ball: [string, number] = ["ball", 35];

hat.forEach((h: string | number) => {
    if(typeof h === "string") {
        console.log(`string: ${h}`);
    }
    else {
        console.log(`number: ${h}`);
    }
});