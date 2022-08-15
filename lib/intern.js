const Employee = require('./employee');
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name,id ,email);
        this.school = school;
    }
// return school from input
    getSchool(){
        return this.school;
    }
    // override role to intern
    getRole(){
        return 'Intern';
    }
}