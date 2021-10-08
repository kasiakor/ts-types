//person shape
type Person = {
    id: string,
    name: string,
    city: string,
    getContact(field: string): string
};

//employee shape
type Employee = {
    id: string,
    company: string,
    dep: string,
    getContact(field: number): number
};

//merging methods with the same name
//create type union

type EmployedPerson = Person & Employee;

let person: EmployedPerson = {id:"annab", name:"Anna Barley", city:"Paris", company:"abcd", dep: "sales",
    getContact(field: string | number):any {
        return typeof field === "string" ? "Alice" : 12345678;
    }
};

// declare type EmployedPerson = Person & Employee;
// declare let person: EmployedPerson;
// declare let typeTest: ((field: string) => string) & ((field: number) => number) - intersection of method signatures
// declare let stringTypeField: string;
// declare let numberTypeField: number;
let typeTest = person.getContact;
let stringTypeField = person.getContact("Gia");
let numberTypeField = person.getContact(12345);


console.log(`Person string contact: ${person.getContact("abc")}, Person contact number ${person.getContact(123)} `);





   
