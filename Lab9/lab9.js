//Problem 1
let person = {
    name: null,
    dateOfBirth: null,
    getName: function(){
        return this.name;
    },
    setName: function(n){
        this.name = n;
    }

}

let john = Object.create(person);
john.setName("John");
john.dateOfBirth = new Date(1998,11,10);

console.log(`The person’s name is ${john.getName()}\n`);
console.log(`John was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()+1}-${john.dateOfBirth.getDate()}`);


//Problem 2

let employee = Object.create(person);

employee.salary = 0.0;
employee.hireDate = new Date();
employee.doJob = function(jobTitle){
    console.log(`${this.getName()} is a ${jobTitle} who earns $${this.salary}`);
 }

let emp1 = Object.create(employee);
emp1.setName("Anna");
emp1.salary = 249995.50;
emp1.doJob("Programmer");

//Problem 3 - Constructor function

function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

let person1 = new Person("Peter", new Date(1985,10,10));
Person.prototype.toString = function(){
    return `{Name:${this.name}, DateOfBirth:${new Intl.DateTimeFormat().format(this.dateOfBirth)}}`;
};

console.log(person1.toString());