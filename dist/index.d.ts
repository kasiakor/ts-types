declare class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dep;
    city: string;
    constructor(id: string, name: string, dep: string, city: string);
    writeDep(): void;
}
declare class Customer extends Person {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
}
declare class Supplier extends Person {
    readonly id: string;
    name: string;
    city: string;
    companyName: string;
    constructor(id: string, name: string, city: string, companyName: string);
}
declare let data: (Employee | Customer)[];
