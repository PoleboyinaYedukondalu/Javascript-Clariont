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




