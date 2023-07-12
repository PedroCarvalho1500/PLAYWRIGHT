const Person = require('./basics7');
//Inheritance is the Main Pillar in Object oriented Programming
//one class inherit/acquire the properties, Methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class, )
//The class whose properties are inherited is known as superclass.

class Pet extends Person
{
    //call parent class constructor
    // constructor(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    //Overwritten Method from the parent
    get Location(){
        return "BlueCross";
    }
    constructor(firstName,lastName){
        super(firstName,lastName);
    }
}

pet1 = new Pet("Aurora","Mitren");
console.log(pet1.fullName());
console.log(pet1.Location);
