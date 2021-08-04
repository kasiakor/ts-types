function calcTax(amount: number): number {
        return amount * 1.2;
}

function writeValue(product: string, price: number): void {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}

let prices: number[] = [100, 50, 30];
let names: string[] = ["hat", "ball", "umbrella"];

prices.forEach((price:number, index:number ) => (writeValue(names[index],calcTax(price))));
