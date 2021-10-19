import {Person, Product} from "./dataTypes";

let people = [new Person("Ala", "New York"), new Person("Ola", "Los Angeles")];
let products = [new Product("Ball", 35), new Product("Shoes", 55)];


//[...people, ...products].forEach(item => console.log(`Item name is ${item.name}`));


class PeopleCollection {
    private items: Person[]=[];
    constructor(initialItems: Person[]) {
        this.items.push(...initialItems)
    }

    add(newItem: Person) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number) {
        return this.items[index];
    }
}

let poepleCollection = new PeopleCollection(people);

poepleCollection.add(new Person("Ela", "Boston"));
console.log(`Names: ${poepleCollection.getNames().join(", ")}`);


let firstName = poepleCollection.getItem(2);

console.log(`Person called ${firstName.name} lives in ${firstName.city}`);