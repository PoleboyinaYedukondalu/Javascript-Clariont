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

//-------------------------------------------------------------------------
const string_array = ['nani','durga'];
console.log(string_array);
// map for string, it will assing the function each element in the array 
let map_string = string_array.map(str1=> str1+str1);
console.log(map_string);

// reduce for string 
let reduce_string = string_array.reduce((str1,str2)=>str1+str2);
console.log(reduce_string);

let filter_string = string_array.filter(str5 => str5.split());
console.log(filter_string);

//-------------------------------------------------------------------------
let reduce_array1 = numbers_array.reduce((num1,num2)=>num1+num2);
console.log(reduce_array1); //Output : 20