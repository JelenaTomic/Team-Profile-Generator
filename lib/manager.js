const Employee = require('./employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    // override role to mng
    getRole(){
        return 'Manager';
    }

}

// to be exported 
module.exports = Manager;  