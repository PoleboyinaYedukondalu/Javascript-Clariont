// objects :-

let emp = {
    role:'webDeveloper',
    company:'clariont',
    name: 'nani',
    'work exp':'1year' // we can't call it with "." operator
}
emp.name='krishna' //updating the property of existing object
emp.age=22 // adding the new property to the existing object
console.log(emp)
console.log(emp.name)
console.log(emp['role'])
console.log(emp['work exp']) // we cant use "." operators 
console.log(emp.age)

// complex object :- object within other object   

let employee = {
    name:'nani',
    tech:'webDeveloper',
    laptop:{
        brand:"realme",
        properties:{
            ram:'8gb',
            memory:512  
        }
    }
}
// delete employee.laptop
console.log(employee.laptop.brand)
console.log(employee.laptop.properties.ram)