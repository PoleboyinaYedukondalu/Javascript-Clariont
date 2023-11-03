// CALLBACKL FUNCTION :-
//> A function that is passed as an argument to another function 
//> Call back function is used to call one function in anthoer function 
//> It is used to set the timers, how much time the programe buffer
//> It is used to when the function is called using callback()
//> Call back functipon have one defualt object setTimeout

//first example :
function doSomethingAsync (callback) {
    setTimeout(function () {
      console.log("Task is done.");
      callback();// Call the callback function after the task is completed
    },0);//hear 0 is setting buffer time 
  }



  function onTaskComplete() {
    console.log("Callback executed.");
   
  }
  
doSomethingAsync(onTaskComplete);

//second example :  
function greet(name,callback){
    console.log('hii'+''+name);
    callback();
  }
  function callme(){
    console.log('i am callback function');
  }
greet("nani",callme)