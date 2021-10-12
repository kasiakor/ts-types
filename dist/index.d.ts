declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare class Employee {
    readonly id: string;
    name: string;
    private dep;
    city: string;
    constructor(id: string, name: string, dep: string, city: string);
    writeDep(): void;
}
declare let newPerson: Employee;
declare let data: (Person | Employee)[];
