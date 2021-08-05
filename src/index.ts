function calcTax(amount: number): number {
        return amount * 1.2;
}

function writeValue(product: string, price: number): void {
    console.log(`price for ${product}: $${price.toFixed(2)}`);
}

//enum values ribbon = 0, scarf = 1, bracelet = 2
 enum Product {Ribbon, Scarf, Bracelet= 12}
 //enum used in a tuple
 let products: [Product, number][]= [[Product.Ribbon, 42], [Product.Scarf, 28]];

 products.forEach((prod: [Product, number]) => {
     //enum used in a switch statement
     switch(prod[0]) {
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


 //if productValue is 3 and productName is undefined
 let productValue: Product = 2;
 let productName: string = Product[productValue];

 console.log(`productValue is ${productValue} and productName is ${productName}`);