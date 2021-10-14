interface Person {
    name: string;
    getDetails(): string;
}

interface Product {
    name: string;
    price: number;
}


class Employee implements Person {
    //constructor function
    constructor(public name: string, public company: string) {};
    //implements person interface function
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}


class Shoe implements Product {
    //constructor function
    constructor(public name: string, public category: string, public price: number) {};

}

let data: (Person | Product)[] = [new Employee("Zara Howard", "Jazz Club"), new Employee("Alice Barley", "POSK"), new Shoe("Red shoes", "Trainers", 500) ];


data.forEach(item => {
    //check if property exists on item
    if("getDetails" in item) {
        console.log(item.getDetails());
    }
})
    







   
