import Person from './person.js';

export default class Employee extends Person{
    constructor(name,dateOfBirth,salary){
        super(name,dateOfBirth)
        this.salary = salary;
   //     this.hireDate = hireDate;
    }

    doJob(jobTitle){
        let outputString =  `Name: ${this.getName()} is a ${jobTitle} who earns ${this.salary}`;
        return outputString;
    }
}