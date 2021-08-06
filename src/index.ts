//Type '100' is not assignable to type '1 | 2 | 3'
// let restrictedVal: 1 | 2 | 3 = 100;
// console.log(`Restricted value is ${restrictedVal}`);

//no error for null or undefined
let restrictedVal2: 1 | 2 | 3 = undefined;
console.log(`Restricted value is ${restrictedVal2}`);

let firstVal: 0| 1 | 2 | 3 = 1;
let secondVal: 0| 1 | 22 | 33 = 1;

console.log(`firstVal: ${firstVal}, secondVal: ${secondVal}`);

secondVal = 0;
//Type '22' is not assignable to type '0 | 1 | 2 | 3'
firstVal = secondVal;
//fist value now is 0
console.log(`fist value now is ${firstVal}`);
