class Customer {
    //constructor function
    constructor(id, name, city, creditLimit, dogName) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    ;
    //implements person interface function
    getDetails() {
        return `${this.name} has got a credit limit of ${this.creditLimit}`;
    }
}
let alice = new Customer("aliceb", "Alice Barley", "Berlin", 500, "Fido");
//false
console.log(alice, Array.isArray(alice));
let data = [new Customer("zarah", "Zara Howard", "Sidney", 23000, "Benek"), alice];
//access to properties: getDetails(), name
data.forEach(item => console.log(item.getDetails()));
