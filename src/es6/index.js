function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Quisque justo augue, condimentum vel imperdiet bibendum, tempus eu leo \n"
+ "otra frase epica que necesitamos."

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX'
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "gobalVar";
}

{
    let globalLet = "globalLet";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';