//Types of property 'name' are incompatible.
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
    //implements dogowner interface function
    getDogDetails() {
        return `${this.name} owns a dog named ${this.dogName}`;
    }
}
let alice = new Customer("aliceb", "Alice Barley", "Berlin", 500, "Fido");
//false
console.log(alice, Array.isArray(alice));
let dogOwners = [alice];
//true
console.log(dogOwners, Array.isArray(dogOwners));
let data = [new Customer("zarah", "Zara Howard", "Sidney", 23000, "Benek"), alice];
let dataDog = [new Customer("barbarab", "Barbara Barley", "Paris", 25000, "Zola"), alice];
data.forEach(item => console.log(item.getDetails()));
dataDog.forEach(item => console.log(item.getDogDetails()));
