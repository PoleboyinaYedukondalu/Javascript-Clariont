let num = 6
console.log(num,typeof num)

let changed_into_string = String(num)
console.log(changed_into_string,typeof changed_into_string)

let change_number=Number(changed_into_string)
console.log(change_number,typeof change_number)

let x = parseInt("nani 99125") // out put is NaN - not a number
console.log(x)

let x1 = parseInt("99125 nani") // out put is 9912542, it print first number if in the string start with numbers
console.log(x1)

let x3 = parseInt("1 n 2 a 3 n 4 i") //it will print the fitst int only "1"
console.log(x3)

//LOGICAL OPERATORS :-
//  and &&
//  or |
//  not !

let x5=7, y=8, z=5;

let result1 = x<y && x<z;
let result2 = x<y || x<z;
let n = !result;
console.log(result , n);
