"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Ala", "New York"), new dataTypes_1.Person("Ola", "Los Angeles")];
let products = [new dataTypes_1.Product("Ball", 35), new dataTypes_1.Product("Shoes", 55)];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let poepleCollection = new DataCollection(people);
poepleCollection.add(new dataTypes_1.Person("Ela", "Boston"));
console.log(`Names: ${poepleCollection.getNames().join(", ")}`);
let firstName = poepleCollection.getItem(2);
if (firstName instanceof dataTypes_1.Person) {
    console.log(`Person called ${firstName.name} lives in ${firstName.city}`);
}
