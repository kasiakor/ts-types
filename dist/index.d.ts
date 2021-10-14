interface Product {
    name: string;
    price: number;
}
declare class SportProduct implements Product {
    name: string;
    category: string;
    price: number;
    constructor(name: string, category: string, price: number);
}
declare class ProductGroup {
    constructor(...initialProducts: [string, Product][]);
    [propertyName: string]: Product;
}
declare let group: ProductGroup;
