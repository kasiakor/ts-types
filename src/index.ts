let hat = {name: "Hat", price: 100};
let gloves = {name: "gloves", price: 75};

//additional property will be ignored by the compiler
let umbrella = {name: "umbrella", price: 30, waterproof: true};

let products: {name: string, price: number}[]= [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}, ${prod.price}`));