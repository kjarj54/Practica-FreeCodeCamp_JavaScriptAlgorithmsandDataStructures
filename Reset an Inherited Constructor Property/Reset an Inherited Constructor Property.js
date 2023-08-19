function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird; // Set the constructor property

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Set the constructor property

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);   // Output: [Function: Bird]
console.log(beagle.constructor); // Output: [Function: Dog]
