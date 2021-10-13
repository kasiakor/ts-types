declare type Person = {
    name: string;
    getDetails(): string;
};
declare class Customer implements Person {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    dogName: string;
    constructor(id: string, name: string, city: string, creditLimit: number, dogName: string);
    getDetails(): string;
}
declare let alice: Customer;
declare let data: Person[];
