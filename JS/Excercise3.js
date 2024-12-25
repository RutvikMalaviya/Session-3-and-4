    // Excersice 3

// Base class
class Shape {
    constructor(name) {
      this.name = name;
    }
  
    // Method to calculate the area will be overridden by subclasses
    calculateArea() {
      throw Error("calculateArea() is implemented in subclass so it give error");
    }
  }
  
  // Circle subclass
  class Circle extends Shape {
    constructor(radius) {
      super("Circle");
      this.radius = radius;
    }
  
    // Override calculateArea 
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Triangle subclass
  class Triangle extends Shape {
    constructor(base, height) {
      super("Triangle");
      this.base = base;
      this.height = height;
    }
  
    // Override calculateArea
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Create an instance of Circle
  const circle = new Circle(5); //  radius = 5
  console.log(`The area of the ${circle.name} is ${circle.calculateArea().toFixed(2)}`);
  
  // Create an instance of Triangle
  const triangle = new Triangle(10, 6); //  base = 10, height = 6
  console.log(`The area of the ${triangle.name} is ${triangle.calculateArea().toFixed(2)}`);
  