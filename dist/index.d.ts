interface Person {
    name: string;
    getDetails(): string;
}
interface DogOwner {
    name: number;
    getDogDetails(): string;
}
declare class Customer implements Person, DogOwner {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    dogName: string;
    constructor(id: string, name: string, city: string, creditLimit: number, dogName: string);
    getDetails(): string;
    getDogDetails(): string;
}
declare let alice: Customer;
declare let dogOwners: DogOwner[];
declare let data: Person[];
declare let dataDog: DogOwner[];
