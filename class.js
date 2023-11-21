// Class definition
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log("Woof!");
    }
}

// Object creation using the class
let myDog = new Dog("Buddy", "Labrador");

// Accessing class properties and calling method
console.log(myDog.name);  // Output: Buddy
myDog.bark();  // Output: Woof!
