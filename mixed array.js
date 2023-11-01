//Mixed array with simple example 
//writen by nani (Poleboyina Yedukondalu)

//creatyeing Mixed array
let Mixed_array =['nani',{company:'clariont',
                          role:'developer'},[9912542198,10],true];
console.log(Mixed_array)

// accesing the elements of Mixed array using slice method
console.log("slicing : ",Mixed_array.slice(0,2))

//pushing the elements to the Mixed_array 
Mixed_array.push([7,8,9])
console.log("adding using push method :",Mixed_array)

//deleting the last element of the Mixed_array
Mixed_array.pop()
console.log("using pop method :",Mixed_array)

//deleting the perticula elemt of Mixed_array using delete method, it follows the index 
delete(Mixed_array[1])
console.log("deleting the perticular elements using delete method :",Mixed_array)