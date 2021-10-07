declare type Product = {
    id: string;
    name: string;
    city: string;
};
declare type Employee = {
    company: string;
    dep: string;
};
declare let hat: {
    id: number;
    name: string;
    price: number;
};
declare let gia: {
    id: string;
    name: string;
    city: string;
    company: string;
    dep: string;
};
declare let dataItems: (Product & Employee)[];
