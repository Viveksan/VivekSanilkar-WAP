import Employee from './model/employee.js';
import Person from './model/person.js';

let perArr = new Array();

perArr.push(new Person("Ana Smith",new Date('1998-12-15')));
perArr.push(new Person("Bob Jone",new Date('1945-11-16')));
perArr.push(new Person("Carlos Slim Helu",new Date('1976-09-24')));

console.log(perArr.length);

for(let ele of perArr){
    console.log(ele.toString());
}

let emp1 = new Employee("Jim Hanson",new Date(1999-12-12),245990.00);
console.log(emp1.doJob("Software Engineer"));


