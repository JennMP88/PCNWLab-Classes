/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/

class Rectangle {
        //created properties 
        constructor (length, height) {
                this.length= length; //this['length']=length
                this.height=height;
        }
                //isSquare
        isSquare() 
        {
                if (this.length === this.height) 
                {       return "true"} 
                {      return false} 
        }

       //calculations
        calculateArea() {
                return this.length * this.height;
        }
        calculatePerimeter(){
                return (2* this.length) + (2* this.height)
        } 
}
let shapeObject = new Rectangle(4,5) //instance of class
let newShape= new Rectangle (4,4)
console.log(shapeObject.calculateArea())
console.log(shapeObject.calculatePerimeter())
console.log (shapeObject.isSquare())
console.log(newShape.isSquare())


/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle
*/

class Circle  {
        //created properties 
        constructor (radius) {
                this.radius= radius; 
        }
                
         //calculations
        calculateArea() {
                return (3.14*this.radius**2);
        }
        calculateDiameter(){
                return (2* this.radius)
        } 
        calculateCircumference(){
                return (2* 3.14 * this.radius)
        } 
}
let shape1 = new Circle(4) //instance of class
console.log(shape1.calculateArea())
console.log(shape1.calculateDiameter())
console.log (shape1.calculateCircumference())


/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/

class Pet {
        //created properties 
        constructor (name, animal, greeting) {
                this.name= name;
                this.animal =animal;
                this.greeting= greeting;
        }
                
         //calculations
         greet() {
                // return this.name + " the " + this.animal + " said " + this.greeting;
                return `${this.name} the ${this.animal} said ${this.greeting}`;
            }
        }
        
        const angel = new Pet('Angel', 'pit bull', 'Mr. Worldwide');
        console.log(angel.greet())


/*  4
    Define a @class called Person
    With @properties: name, age, pets
    With @methods: 
        profile() // Returns a greeting. Eg. "John is 30 years old."
        addPet(name, animal, greet) // Adds a new pet for the person
        meetPets() // Console.log() all of the person's pet's greets
                   // Eg. 
                   // John's pet Rexy the dog said Woof!
                   // John's pet Annabelle the cat said Meow!
                   // John's pet Elsie the cow said Moo!
*/
class Person {
        //created properties 
        constructor (name, age, pets) {
                this.name= name;
                this.age =age;
                this.pets= pets;
        }
                
         //calculations
         states(){
                return 
        } 
        
}

let Rexy = new Pet (name, animal, greet)
let dog = new Pet (name, animal, greet)
let woof =new Pet (name, animal, greet)


console.log(name.statesName())
console.log(animal.animalType())
console.log (greet.statesGreeting())