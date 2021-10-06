type Product = {
    name: string,
    price: number,
    waterproof?: boolean
}


let hat = {name: "Hat", price: 100};
let gloves = {name: "gloves", price: 75};
let umbrella = {name: "umbrella", price: 30, waterproof: true};

//no error reported by compiler 
let mirrorShades = {name: "Sunglasses", price: 55, finish: "mirrored"};

//no error reported by compiler
//let darkShades = {name: "Sunglasses", price: 55, finish: "dark"};

//Type '{ name: string; price: number; finish: string; }' is not assignable to type 'Product'
//Object literal may only specify known properties, and 'finish' does not exist in type 'Product'
//configure compiler not to report error: suppresExcessPropertyErrors: true
let darkShades: Product = {name: "Sunglasses", price: 55, finish: "dark"};


let products: Product[] = [hat, gloves, umbrella, mirrorShades, darkShades];

products.forEach(prod => console.log(`${prod.name}, ${prod.price}, Waterproof: ${prod.waterproof}`));
