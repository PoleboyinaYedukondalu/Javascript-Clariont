// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic animal sound");
    }
}

// Child class inheriting from Animal
class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}

let myCat = new Cat("Whiskers");
myCat.makeSound();  // Output: Meow
