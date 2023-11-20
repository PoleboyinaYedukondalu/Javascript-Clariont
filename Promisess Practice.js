// practice for creating promises 
// => In this example the code should work as expected, resolve either "fetchData()" or "error occurred" 
//    based on the value of data.
// Thease are the example for the Promisess
const myPromise = new Promise((resolve, reject) => {
    // Async operation, e.g., fetching data from a server
    const data = fetchData();
  
    if (data) {
      resolve(data); 
    } else {
      reject('Error occurred'); 
    }
  });

myPromise
  .then((result) => {
    console.log('Operation successful:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// this cod ethrow the error fetchData is not defined because this is just an example code 
// we cant define any function name with fatychdat() here 
//======================================================================================
// Another example for creating promises
const Myname = new Promise((nani,durga) => {
    setTimeout(() =>{
    const x = true;

    if(x){
        nani("employee present");
    }
    else {
        durga("employ absent");
    }
},1000);
});


Myname
    .then((present) =>{
        console.log(present);
    })
    .catch((absent) => {
        console.log(absent);
    });

// => The code should work as expected, logging either "Employee present" 
//    or "Employee absent" based on the value of x.

