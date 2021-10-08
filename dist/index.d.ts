declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type Anyname = {
    id: string;
    name: string;
    dep: string;
    city: string;
    writeDep: () => void;
};
declare let Employee: (id: string, name: string, dep: string, city: string) => void;
declare let newPerson: any;
declare let data: (Person | Anyname)[];
