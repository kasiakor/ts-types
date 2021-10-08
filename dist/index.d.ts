declare type Person = {
    id: string;
    name: string;
    city: string;
    getContact(field: string): string;
};
declare type Employee = {
    id: string;
    company: string;
    dep: string;
    getContact(field: number): number;
};
declare type EmployedPerson = Person & Employee;
declare let person: EmployedPerson;
declare let typeTest: ((field: string) => string) & ((field: number) => number);
declare let stringTypeField: string;
declare let numberTypeField: number;
