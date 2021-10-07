declare type Person = {
    id: string;
    name: string;
    city: string;
    contact: {
        name: string;
    };
};
declare type Employee = {
    id: string;
    company: string;
    dep: string;
    contact: {
        phone: number;
    };
};
declare type EmployedPerson = Person & Employee;
declare let typeTest: {
    name: string;
} & {
    phone: number;
};
declare let person1: EmployedPerson;
declare let person2: EmployedPerson;
