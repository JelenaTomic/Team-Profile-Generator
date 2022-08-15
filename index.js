const inquirer = require ('inquirer');
const genPage = require ('./src/template');
const fs = require ('fs')
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');

let team = {
    manager : null,
    engineers : [],
    interns : []
}
// mng
function inti(){
    inquirer.prompt([
        {
            type: "input",
            name : "mnName",
            message : "What is the managers name"
        },
        {
            type : "input",
            name : "mnId",
            message: "What is the managers employee ID number"
        },
        {
            type : "input",
            name : "mnEmail",
            message: "What is the managers email?"

        },
        {
            type : "input",
            name : "mnOfficeNumber",
            message: "What is the managers office number?"

        }
    
    ])
    .then(answer =>{
        team.manager = new Manager(answer.mnName, answer.mnId, answer.mnEmail, answer.mnOfficeNumber);
        addTeamMember();
    })
}
// making switch to add Engineer or add Intern or make HTML 
function addTeamMember(){
    inquirer.prompt([{
        type : "list",
        message : "Do you want to add new employee? " ,
        name : "roleSelector",
        choices : ["Engineer", "Intern" , "Im done"]
    }])
    .then(function (userInput) {
        switch(userInput.roleSelector){
            case "Engineer" :
                addEngineer();
            break;
            case "Intern":
                addIntern();
            break;
            case "Im done":
                genPage(team);
                console.log(team);
                writeToFile('./dist/index.html', genPage(team));
        }
      })
}