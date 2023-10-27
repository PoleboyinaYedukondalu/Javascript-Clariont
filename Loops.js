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

let num1 = 1;
 

for(;num1<=5;){
    console.log("nani",num1)
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
