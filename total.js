// variables :- var- it is used for globel variables
            //  let- it is also used globel and local , let is recently added
            //  this- it is used local that means used with in the function 
            //  cont- it used for fixd value we can't update the consta value once we assigned 
            

            let num = 4

            console.log(num)
            
            let username = "nani"
            let userid = "nani's user id"
            console.log("username :",username,  "user id :",userid)
            
            
            let radius = 5
            const pi = 3.14 // we cant change value of constant variable in further
            let area
            
            radius = 6
            area=pi*radius*radius
            
            console.log(area)
            
let num1 = 6
console.log(num1,typeof num1)

let changed_into_string = String(num1)
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
let n = !result1;
console.log(result1 , n);
//------------------------------------------------------------------
// objects :-

let emp = {
    role:'webDeveloper',
    company:'clariont',
    name: 'nani',
    'work exp':'1year' // we can't call it with "." operator
}
emp.name='krishna' //updating the property of existing object
emp.age=22 // adding the new property to the existing object
console.log(emp)
console.log(emp.name)
console.log(emp['role'])
console.log(emp['work exp']) // we cant use "." operators 
console.log(emp.age)

// complex object :- object within other object   

let employee = {
    name:'nani',
    tech:'webDeveloper',
    laptop:{
        brand:"realme",
        properties:{
            ram:'8gb',
            memory:512  
        }
    }
};
// delete employee.laptop
console.log(employee.laptop.brand);
console.log(employee.laptop.properties.ram);

//-----------------------------------------------------------------------

// while loop , do while loop, for loop

let i = 1;

while(i<=5){
    console.log(i,"nani");
    i++; //post increment
}

console.log(i) // output is 6

// do while loop 

let i1 = 10;

do{
    console.log("hii",i1);
    i1++;
}while(i1<=5);
//-------------------------------------------------------------------
// for loop :- for(;;){} it is infynity loop

for(let num=1; i<=5; i++){
    console.log("hii",num)
}

let num2 = 1;
 

for(;num2<=5;){
    console.log("nani",num2)
}

console.log("----------------------------------------------")
//----------------------------------------------------------------

for(let i=1; i<=100; i++){
    if(i%3===0){
        console.log(i)
    }
}

//-----------------------------------------------------------

let number1 = 12345;

while(number1>0){
    console.log(num%10)
    num = parseInt(num/10)
}
//-----------------------------------------------------------

// data types are two types :- primitive and nonprimitive
// primitive :- number,string,boolean,null,undefined,symbol
// nonprimitiv :- object

let data = 8          // number
let FirstName = "nani"     // string

// in this "n" means bigint data type
let num3 = 12345678900987654321123456789n
console.log(num3+2n);

// oparators
let LastName = "poleboyina"
console.log(FirstName+LastName)

// escape words
// "\"nani\" " it ignores the quotes error and print asit is string what ue give
let TotalName = "poleboyina Nani \"python\" "
console.log(TotalName)

// "\n" is print new line
let TotalName1 = "poleboyina \n Nani"
console.log(TotalName1)

// "/t" it gives the sigle tag space
let TotalName2 = "poleboyina \t Nani"
console.log(TotalName2)

// booleans 
let bool = 5>6
console.log(bool)

let bool1 = 5<6
console.log(bool1)

console.log(typeof bool1,bool)

// null 
let user = null
console.log(user)
console.log(typeof user)

//undefined
let user1 
console.log(user1);

//--------------------------------------------------------------------

// // CONDITIONAL STATEMENTS :-
let numb = 5
let result

if(numb%2===0){
    result = "even"
}
else{
    false
}

console.log("-----------------------------------------------")

let numb1 = 6; 

let numb2 = 4;

let numb3 = 7;

if(num1 > num2 && num1 > num3){
    console.log(num1,"num1 is greater")
}
else if(num2 > num1 && num2 > num3){
   console.log(num2,"num2 is greatest")
}
else{
    console.log(num3,"num3 is greatest")
}

console.log("------------------------------------------------")
// "?" ternary oparator is used when it is only one condition

result = num%2===0 ? "even" : "odd";
console.log("given number is ",result,"using ternary operator")

console.log("------------------------------------------------")

//-----------------------------------------------------------------------------

//define a function and calling a function 
function greet1()
{
    console.log("Hello world");
    
};
greet1();

//define a function with arugment and return values 
function greet2(user)
{
    return `hello ${user}`; //we can write only sing return statement
};

// let user = "7hills";
let str = greet2('7hills');
console.log(str);

//function with aurgs without return type
function  vijaya(a,b){
       c = a+b

};
let re = vijaya(5,6);
console.log(re);

//anyonmous function 
const unNamed_function = function(value1,value2){
    let Result = value1+value2
    console.log(`result of ${value1} and ${value2} is : ${Result}`);

};
unNamed_function(10,20);

//example of constructor funtion  
function bike_car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};
// instance for car with new keyword 
var car1 = new bike_car("KIA",2023,1500000);
console.log(`brand name : ${car1.brand}`);
console.log(`model : ${car1.model}`);
console.log(`price : ${car1.price}`);

//new instance for bike object or function
var bike = new bike_car("RoyalEnfield",2022,270000);
console.log(`brand name : ${bike.brand}`);
console.log(`model : ${bike.model}`);
console.log(`price : ${bike.price}`);

// arrow function
const Full_Name = (FirstName,LastName) => FirstName+" "+LastName;
console.log('My Name is :',Full_Name('Nani','Poleboyina'));

//---------------------------------------------------------------------------------

// Standed array and some methods 
// writen by nani (poleboyina yedukondalu)

let Standed_array = [1,2,3,4,5];
console.log(Standed_array.length)
//adding one elemet to existing standed array, it added the elemts at the last of the existing array :
Standed_array.push(6)
console.log(Standed_array)
//delete the last elimet using pop methodsd, it delete the lasxt elemnet of the array
Standed_array.pop()
console.log(Standed_array)
//shift will remove the first element of the array
Standed_array.shift(0)
console.log(Standed_array)
//unshift will adding the single or multiple elements to the existung array at the front side
Standed_array.unshift(10,20)
console.log(Standed_array)
//slice is used to acces the elements which point to which point, it can work the out of the index also
console.log(Standed_array.slice(0,10))

//-------------------------------------------------------------------------------------------------------------------

//Dynamic array with simple example 
// writen by nani (Poleboyina Yedukondalu)
//creating empty array
let Dynamic_array=[];
//pushing the number of elemts dynamically to the empty array using push method 
Dynamic_array.push(1,2,3,4,5);
//delete the last elimet using pop methodsd, it delete the lasxt elemnet of the array
Dynamic_array.pop();
console.log(Dynamic_array)

//-------------------------------------------------------------------------------------------------------------------------

//Nested array with simple example 
//writen by nani (Poleboyina Yedukondalu)

//creatyeing nested array
let Nested_array =[[1,2,3],[4,5,6]];
console.log(Nested_array)

// accesing the elements of nested array using slice method
console.log("slicing : ",Nested_array.slice(0,2))

//pushing the elements to the nested array
Nested_array.push([7,8,9])
console.log("adding using push method :",Nested_array)

//deleting the last element of the nested array
Nested_array.pop()
console.log("using pop method :",Nested_array)

//deleting the perticula elemt of nested array using delete method, it follows the index 
delete(Nested_array[1])
console.log("deleting the perticular elements using delete method :",Nested_array)

//---------------------------------------------------------------------------------------------------------------------------

//Mixed array with simple example 
//writen by nani (Poleboyina Yedukondalu)

//creatyeing Mixed array
let Mixed_array =['nani',{company:'clariont',role:'developer'},[9912542198,10],true];
console.log(Mixed_array)

// accesing the elements of Mixed array using slice method
console.log("slicing : ",Mixed_array.slice(0,2))

//pushing the elements to the Mixed_array 
Mixed_array.push([7,8,9])
console.log("adding using push method :",Mixed_array)

//deleting the last element of the Mixed_array
Mixed_array.pop()
console.log("using pop method :",Mixed_array)

//deleting the perticula elemt of Mixed_array using delete method, it follows the index 
delete(Mixed_array[1])
console.log("deleting the perticular elements using delete method :",Mixed_array);

//-------------------------------------------------------------------------------------------------------------------

// empty arry :
let Myarry =[];

// standed arry :
let myarray = [1,2,3,4,5];

// object arry :
let myarray2 = [{user:'nani',role:'jascript'}];

// dynamic arry :
let my_arry1=[];
my_arry1.push(1);
my_arry1.pop(1);
console.log(my_arry1)

// nested arry :
let myarry3 =[[1,2,3],[4,5,6]];
console.log(myarry3)
console.log(myarry3.slice(1))

// mixed arry :
let myarray4 =['nani',{company:'clariont',role:'developer'},[9912542198,10],true];


// string array :
let myarry5 =['nani','dhurga','pawan'];

// methods of arrys :
push
pop
shift
unshift
replace
slice

let my_arry = [];

// push :
my_arry = my_arry.push('nani','clariont','developer');

// pop :
let myarry = myarry.pop('developer');

// unshift :
myarry.unshift(1);

// shift :
myarry.shift();

// slice :
let myarry1 =[1,2,3,4,5];
myarry1.slice(1,5);

//-----------------------------------------------------------------------------------------------------
//map filter reduce :
const numbers_array = [1,2,3,4,5];

//map 
let squaring_numbers = numbers_array.map(num => num*num);
console.log(squaring_numbers); //Output : [ 1, 4, 9, 16, 25 ]

//filter
let filter_number = squaring_numbers.filter((num1=>num1%2==0));
console.log(filter_number); //Output : [ 4, 16 ]

//reduce 
let reduce_array = filter_number.reduce((num1,num2)=>num1+num2,0);
console.log(reduce_array); //Output : 20







         