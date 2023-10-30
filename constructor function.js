//constructor funtion example 
function bike_car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};
//instance for car with new keyword 
var car1 = new bike_car("KIA",2023,1500000);
console.log(`brand name : ${car1.brand}`);
console.log(`model : ${car1.model}`);
console.log(`price : ${car1.price}`);

//new instance for bike object or function
var bike = new bike_car("RoyalEnfield",2022,270000);
console.log(`brand name : ${bike.brand}`);
console.log(`model : ${bike.model}`);
console.log(`price : ${bike.price}`);


//2nd example of constructor function 
function class1(student,no,grade){
    this.student=student;
    this.no=no;
    this.grade=grade;
};
var class2 = new class1("nani",555,"A+")
console.log(class2);