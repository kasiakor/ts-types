interface Person {
    name: string;
    getDetails(): string;
    
    dogName?: string;
    getDogDetails?(): string;
}



class Customer implements Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number, public music: string) {};
    //implements person interface function
    getDetails() {
        return `${this.name} has got a credit limit of ${this.creditLimit}`;
    }
    //implements dogowner interface function
    // getDogDetails() {
    //     return `${this.name} owns a dog`;
    // }
}


let alice = new Customer("aliceb", "Alice Barley", "Berlin", 500, "Classic");


let data: Person[] = [new Customer("zarah", "Zara Howard", "Sidney", 23000, "Jazz"), alice ];

//access to properties: getDetails(), name
data.forEach(item => {
    console.log(item.getDetails());
    if(item.getDogDetails) {
        console.log(item.getDogDetails());
    }
})
    







   
