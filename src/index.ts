import {Person, Product} from "./dataTypes";

let people = [new Person("Ala", "New York"), new Person("Ola", "Los Angeles")];
let products = [new Product("Ball", 35), new Product("Shoes", 55)];


//[...people, ...products].forEach(item => console.log(`Item name is ${item.name}`));

//type dataType = Person | Product;

class DataCollection<T> {
    private items: T[]=[];
    constructor(initialItems: T[]) {
        this.items.push(...initialItems)
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }

    getItem(index: number): T {
        return this.items[index];
    }
}

let poepleCollection = new DataCollection(people);

poepleCollection.add(new Person("Ela", "Boston"));
//console.log(`Names: ${poepleCollection.getNames().join(", ")}`);


let firstName = poepleCollection.getItem(2);

//if(firstName instanceof Person) {
    console.log(`Person called ${firstName.name} lives in ${firstName.city}`);
//}

