declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type Employee = {
    id: string;
    company: string;
    dep: string;
};
declare type EmployedPerson = Person & Employee;
declare let people: Person[];
declare let employees: Employee[];
declare function correlateData(peopleData: any, staff: any): EmployedPerson[];
declare let dataItems: EmployedPerson[];
