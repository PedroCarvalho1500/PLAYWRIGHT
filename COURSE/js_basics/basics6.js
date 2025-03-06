const Person = require("./basics7");
//import Person from './basics7'

//object is collection of properties.

let person = {
    firstName:'Tim',
    lastName: 'Joe',
    age: 24,
    // fullName: () => {
    //     //return firstName+" "+lastName
    //     console.log(this.firstName);
    //     }
    fullName: function(){
        return console.log(this.firstName+" "+this.lastName);
    }
    
}




console.log(person.firstName);
console.log(person.lastName);
console.log(person["firstName"]);
console.log(person["lastName"]);

person.firstName = "Tim Dane";
console.log(person["firstName"]);



person.gender = "Male";
console.log(person["gender"]);
console.log(person);
delete person.gender;
console.log(person);
console.log('gender' in person);

for (let key in person){
    console.log(person[key]);
}

console.log("\n\n\n******")
//console.log(person.fullName())
//person.fullName();


let person3 = new Person("Rio","Ferdinand");
console.log(person3.fullName());