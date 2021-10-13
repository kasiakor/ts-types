interface Person {
    name: string;
    getDetails(): string;
    dogName?: string;
    getDogDetails?(): string;
}
declare class Customer implements Person {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    music: string;
    constructor(id: string, name: string, city: string, creditLimit: number, music: string);
    getDetails(): string;
}
declare let alice: Customer;
declare let data: Person[];
