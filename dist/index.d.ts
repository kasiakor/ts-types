declare abstract class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    getDetails(): string;
    abstract getMoreDetails(): string;
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dep;
    city: string;
    constructor(id: string, name: string, dep: string, city: string);
    writeDep(): void;
    getMoreDetails(): string;
}
declare class Customer extends Person {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getMoreDetails(): string;
}
declare class Supplier extends Person {
    readonly id: string;
    name: string;
    city: string;
    companyName: string;
    constructor(id: string, name: string, city: string, companyName: string);
    getMoreDetails(): string;
}
declare let data: Person[];
