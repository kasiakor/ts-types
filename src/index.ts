//describes object shape
interface Person {
    name: string;
    getDetails(): string;   
}

class Employee implements Person {
    //constructor function
    constructor( public readonly id: string, public name: string, private dep: string, public city: string) {}

    getDetails() {
        return `Employee works in deparatament of ${this.id}`;
    }
}

class Customer implements Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number) {}
    getDetails() {
        return `Customer credit limit is ${this.id}`;
    }
}


let data: Person[] = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000), ]

//property 'id' does not exist on type 'Person'
//data.forEach(item => console.log(item.id));

data.forEach(item => console.log(item.getDetails()));




   
