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
function init(){
    inquirer.Prompt([
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
    
    ]).then(answer =>{
        team.manager = new Manager(answer.mnName, answer.mnId, answer.mnEmail, answer.mnOfficeNumber);
        addTeamMember();
    })
}