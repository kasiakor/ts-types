let hat = { name: "Hat", price: 100 };
let gloves = { name: "gloves", price: 75 };
let umbrella = { name: "umbrella", price: 30, waterproof: true };
//let products: {name: string, price: number, waterproof?: boolean }[]= [hat, gloves, umbrella];
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}, ${prod.price}, Waterproof: ${prod.waterproof}`));
