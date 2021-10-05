let hat = { name: "Hat", price: 100 };
let gloves = { name: "gloves", price: 75 };
//hat, 100, Waterproof: undefined
//gloves, 75, Waterproof: undefined
let umbrella = { name: "umbrella", price: 30, waterproof: true };
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}, ${prod.price}, Waterproof: ${prod.waterproof}`));
