const Employee = require ('./employee');
class Engineer extends Employee {
    constructor (name, id ,email , GitHub){
        super (name, id, email);
        this.GitHub = GitHub;
    }
    // return GitHub from input
    getGitHub(){
        return this.GitHub;
    }
    // override role to engineer
    getRole(){
        return 'Engineer'
    }
}