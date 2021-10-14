class SportProduct {
    //constructor function
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
    ;
}
class ProductGroup {
    //constructor function
    constructor(...initialProducts) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
    ;
}
let group = new ProductGroup(["Shirt", new SportProduct("Polo", "Winter Collection", 99)]);
console.log(group);
group.hat = new SportProduct("Jumper", "Summer Collection", 55);
console.log(group.hat);
Object.keys(group).forEach(k => console.log(`property name is ${k}`));
console.log(Object.keys(group));
