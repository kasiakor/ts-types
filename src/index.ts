//describes object shape
interface Person {
    name: string;
    getDetails(): string;   
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;   
}


class Customer implements Person, DogOwner {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number, public dogName: string) {};
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

let dogOwners: DogOwner[] = [alice];
//true
console.log(dogOwners, Array.isArray(dogOwners));

let data: Person[] = [new Customer("zarah", "Zara Howard", "Sidney", 23000, "Benek"), alice ];

let dataDog: DogOwner[] = [new Customer("barbarab", "Barbara Barley", "Paris", 25000, "Zola"), alice ]

data.forEach(item => console.log(item.getDetails()));

dataDog.forEach(item => console.log(item.getDogDetails()));





   
