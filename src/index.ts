function calcTax(amount: number): number {
        return amount * 1.2;
}

function writeValue(product: string, price: number): void {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}

let hat = 100;
let ball = 50;
let umbrella = 30;


writeValue("Hat price is ", calcTax(hat));
writeValue("Ball price is ", calcTax(ball));
writeValue("Umbrella price is ", calcTax(umbrella));


