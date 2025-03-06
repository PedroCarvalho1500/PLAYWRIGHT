//Classes, Methods and Objects

class Person
{
    //constructor
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    age = 25

    //methods
    fullName = () => {
        return this.firstName+" "+this.lastName;
    }

    get location(){
        return 'Canada'
    }
}



// let person1 = new Person("Thomas","Mendez");
// console.log(person1.fullName());
// console.log(person1.location);

// let person2 = new Person("Michael","Carrick");
// console.log(person2.fullName());
// console.log(person2.location);

module.exports = Person;