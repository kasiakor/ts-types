declare function calcTax(amount: number): number;
declare function writeValue(product: string, price: number): void;
declare enum Product {
    Ribbon = 0,
    Scarf = 1,
    Bracelet = 2
}
declare let products: [Product, number][];
