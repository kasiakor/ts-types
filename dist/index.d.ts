declare type Person = {
    id: string;
    name: string;
    city: string;
    contact: string;
};
declare type Employee = {
    id: string;
    company: string;
    dep: string;
    contact: number;
};
declare type EmployedPerson = Person & Employee;
declare let typeTest: string & number;
declare let person1: EmployedPerson;
declare let person2: EmployedPerson;
