/*
// Var and let concept 

var a = 10;
let b = 20;
const c = 50;

// Let: Variable decleared by let are only available inside the block where the are defined. 

//Var: Variable are decleared by var are available globally inside the program. We can access this from any where



{
    let b = 25;
    console.log(b)
}
console.log("This is outside", b);
console.log("This is the constant value", c);

//let's try to update the constant
//c = 60; // through an type error
//console.log("After update the constant value", c); 

*/






/* ===================
//Rules for naming variables:

let myName = "Omkar Deshmukh";

let _myAge = 20
let package = 55

/*
The rule of define a variable:

=> Varibale names must start with a letter, underscore(_) or dollar($) sign.

=> Variable names can not conatain any special characters or spaces except dollar and underscore.

=> Variable name can not be the same as reserved keywords in JavaScript such as: var, let, const, function, return, if, else, etc.

=> By convension, variable names should be in camelCase.
let myName = "Omkar Deshmukh"; here myName is in camelCase.

=> Variable names are case-sensitive.
let myNameIs = "Omkar Deshmukh";
let mynameis = "Arpan";

=> Variables name can not ne descreptive 
let iLeaveInCollageHostleOrNot 
================== */





// Datatype in js 

/*
total datatypes - 8 
Premitive datatype - String, Number, Boolean, undefined, Null, Symbol
Non-premetive datatype - Object, Array, Function, Date, Set, Map

String 
Number
Boolean
Undifined 
Null
Symbol
Object

*/


let str = "Hello World"; // String
let a = typeof(str); 
// console.log(a);


let num = 10;
let b = typeof(num);
// console.log(b);

let boolValue = true; // true or false
let c = typeof(boolValue);
// console.log(c);

let und;
// console.log(und);

let nullValue = null;
// console.log(nullValue)


let laptop = {
    brand : "HP",
    model : "Pavilion",
    price : 15000
}

console.log(laptop.brand);
console.log(laptop.model);