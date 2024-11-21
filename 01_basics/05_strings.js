const name = "Shahzad"
const repoCount = 50;

// console.log(name + repoCunt + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const getName = new String ('Shahzad');

console.log(getName[1]);
console.log(getName.__proto__);


console.log(getName.length);
console.log(getName.toUpperCase());
console.log(getName.charAt(2));
console.log(getName.indexOf('a',));

const newString =getName.substring(0, 4);
console.log(newString);

const anotherString = getName.slice(0, 4);
console.log(anotherString);

const newStringOne = "   Shahzad   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://refactored-space-sniffle-gj66wpvrwpw2wx5p.github.dev/"

console.log(url.replace('space','___'));

console.log(url.includes('Shahzad'));

console.log(getName.split('-'));