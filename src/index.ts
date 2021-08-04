function calcTax(amount: number): number {
        return amount * 1.2;
}

function writeValue(product: string, price: number): void {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["hat", 50];
let ball: [string, number] = ["ball", 35];

writeValue(hat[0], hat[1]);
writeValue(ball[0], ball[1]);