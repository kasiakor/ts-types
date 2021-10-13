//describes object shape
type Person = {
    name: string;
    getDetails(): string;   
}


class Customer implements Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number, public dogName: string) {};
    //implements person interface function
    getDetails() {
        return `${this.name} has got a credit limit of ${this.creditLimit}`;
    }

}


let alice = new Customer("aliceb", "Alice Barley", "Berlin", 500, "Fido");
//false
console.log(alice, Array.isArray(alice));

let data: Person[] = [new Customer("zarah", "Zara Howard", "Sidney", 23000, "Benek"), alice ];

//access to properties: getDetails(), name
data.forEach(item => console.log(item.getDetails()));







   
