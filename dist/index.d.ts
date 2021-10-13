declare type Person = {
    name: string;
    getDetails(): string;
};
interface DogOwner extends Person {
    dogName: string;
    getDogDetails(): string;
}
declare class Customer implements DogOwner {
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
