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

