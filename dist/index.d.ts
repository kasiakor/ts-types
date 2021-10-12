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
declare let data: Person[];
