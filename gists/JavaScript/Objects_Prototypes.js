//Ways of creating Objects in JavaScript

// Object Literals

var person = {
    fname: "John",
    lname: "Doe",
    age: "40",
    fullname: function () {
        return this.fname + " " + this.lname;
    }
};
console.log(person.fullname());

// Object constructor

var person = new Object();
person.fname = "John";
person.lname = "Doe";
person.age = 40;
person.fullname = function () {
    return this.fname + " " + this.lname;
}
console.log(person.fullname());

// Contructor Function Pattern to Create Object / Create Object with user-defined function.
Patterns are used
for repetitive and common tasks.

function person(fname, lname, age, profession) {
    this.firstName = fname;
    this.lastName = lname;
    this.pAge = age;
    this.pProfession = profession;

    this.fullName = function () {
        return this.firstName + " " + this.lastName + "'s age is " + this.pAge + ", is a " + this.pProfession;
    }
}
var personOne = new person("John", "Doe", 40, "Scientist");
personOne.fullName();
var personTwo = new person("Steve", "Jobs", 50, "C.E.O");
personTwo.fullName();

// Prototype pattern to Create Objects

function person() {}
person.prototype.fname = "john";
person.prototype.lname = "doe";
person.prototype.age = 40;
person.prototype.profession = "scientist";
person.prototype.fullName = function () {
    return this.fname + this.lname;
}
var somePerson = new person();
console.log(somePerson.fullName());

// Prototypal Inheritance in JavaScript

// http://phrogz.net/JS/classes/OOPinJS2.html

function Mammal(name) {
    this.name = name;
    this.offspring = [];
}
Mammal.prototype.haveABaby = function () {
    var newBaby = new Mammal("Baby " + this.name);
    this.offspring.push(newBaby);
    return newBaby;
}
Mammal.prototype.toString = function () {
    return '[Mammal "' + this.name + '"]';
}
Cat.prototype = new Mammal(); // Here's where the inheritance occurs
Cat.prototype.constructor = Cat; // Otherwise instances of Cat would have a constructor of Mammal, creates an object of Cat.

function Cat(name) {
    this.name = name;
}
Cat.prototype.toString = function () {
    return '[Cat "' + this.name + '"]';
}
var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
alert('someAnimal is ' + someAnimal); // results in 'someAnimal is [Mammal "Mr. Biggles"]'
alert('myPet is ' + myPet); // results in 'myPet is [Cat "Felix"]'
myPet.haveABaby(); // calls a method inherited from Mammal
alert(myPet.offspring.length); // shows that the cat has one baby now
alert(myPet.offspring[0]); // results in '[Mammal "Baby Felix"]'


// Prototypes:

// http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/

function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
}

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
    if (this.isOrganic)
        console.log("I am organic, Baby!");
}

function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

var mangoFruit = {
    color: "yellow",
    sweetness: 8,
    fruitName: "Mango",
    nativeToLand: ["South America", "Central America"],

    showName: function () {
        console.log("This is " + this.fruitName);
    },
    nativeTo: function () {
        this.nativeToLand.forEach(function (eachCountry) {
            console.log("Grown in:" + eachCountry);
        });
    }
}