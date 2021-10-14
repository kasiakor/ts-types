interface Product {
    name: string;
    price: number;
}



class SportProduct implements Product {
    //constructor function
    constructor(public name: string, public category: string, public price: number) {};

}

class ProductGroup {
    //constructor function
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]]= p[1]);
    };
    [propertyName: string]: Product;
}

let group = new ProductGroup(["Shirt", new SportProduct("Polo", "Winter Collection", 99)]);
console.log(group);

group.hat = new SportProduct("Jumper", "Summer Collection", 55);
console.log(group.hat);

Object.keys(group).forEach(k => console.log(`property name is ${k}`))

console.log(Object.keys(group));
    







   
