// task 31/10/23
function check(numbers){
    this.numbers=numbers;

    if(numbers.length>0){
        for(var num of numbers){
            console.log(`number : ${num}`);
        };
    }
    else{
        console.log(`array length is not reached requried lenth ${numbers}`);
    };

};

let obj = new check([5,4,3,2,1]);
console.log('-----------------------------------')
var obj1 = new check([1,2,3,4,5]);
