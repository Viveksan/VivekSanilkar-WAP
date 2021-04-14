export default class Person{
    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }

    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }

    toString(){
        let outputString =  `Name: ${this.getName()}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`;
        return outputString;
    }
}