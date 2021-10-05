let hat = {name: "Hat", price: 100};
let gloves = {name: "gloves", price: 75};

//property 'price' does not exist on type '{ name: string; }'
//declaration changed to common properties let products: {name: string;}[];
let umbrella = {name: "umbrella"};

//property 'price' is missing in type '{ name: string; }' but required in type '{ name: string; price: number; }'
let products: {name: string, price: number}[]= [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}, ${prod.price}`));