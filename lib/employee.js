class employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // returning name from input
    getName(){
        return this.name;
    }
    // returning id from input
    getId(){
        return this.id;
    }
    // returning email from input
    getEmail(){
        return this.email;

    }
    // returning employee position
    getRole(){
        return 'Employee';
    }
};