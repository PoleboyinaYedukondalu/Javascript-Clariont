//Simple examples for for-in, forEach and for-of :
const obj = { a: 1, b: 2, c: 3 };
let num_array =[1,2,3,4,5];

//for-in is used in object obj :
for (const key in obj) {
  console.log(key, obj[key]);
}

//for-each is used in array obj1 :
console.log('-----------------------------------------')
num_array.forEach(value => console.log(value));

console.log('-----------------------------------------')
num_array.forEach(function(value){
    let squre=Math.sqrt(value);
    console.log(squre);
});


//for-of is used in array obj1 :
console.log('-----------------------------------------')
for(var num of num_array){
   console.log(num);
}
