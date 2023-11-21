// Simple example for Polymorphism 
class Shape {
    area() {
        console.log("Area calculation not defined for generic shape");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let shapes = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
    console.log("Area:", shape.area());
});
