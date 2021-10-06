type Product = {
    id: number,
    name: string,
    price?: number
}

type Person = {
    id: string,
    name: string,
    city: string
}

type UnionType = {
    id: number | string,
    name: string
}


let hat = {id: 1, name: "hat", price: 100};
let gloves = {id: 2, name: "gloves", price: 75};
let umbrella = {id: 3, name: "umbrella", price: 30, waterproof: true};
let dog = {id: "terrier", name: "Gia", city: "Rome"};

//type union
let dataItems:(UnionType)[] = [hat, gloves, umbrella, dog];


dataItems.forEach(item => console.log(`${item.id}, ${item.name}`));
