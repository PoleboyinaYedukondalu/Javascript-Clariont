// We can create promisess using `Promise` constructor, 
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true;
 
      if (success) {
        resolve('Operation successful');
      } else {
        reject('Error: Operation failed');
      }
   }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
  });

myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  
// => The code should work as expected, logging either "Operation successful" 
//    or "Error: Operation failed" based on the value of success.
