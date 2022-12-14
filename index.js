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
// Add Engineer function when selected
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engName",
            message: "What is the engineers name?"
        },
        {
            type: "input",
            name: "engId",
            message: "What is the engineers Id number?"
        },
        {
            type: "input",
            name: "engEmail",
            message: "What is the engineers email?"
        },
        {
            type: "input",
            name: "engGitHub",
            message: "What is the engineers GitHub username?"
        }

    ])
    .then(answers => {
        const engineer = new Engineer(answers.engName , answers.engId, answers.engEmail, answers.engGitHub);
        team.engineers.push(engineer);
        addTeamMember();

    });
}
// Add Intern if selected
function addIntern() {
    inquirer.prompt([
  
      {
        type: "input",
        name: "inName",
        message: "What is the intern's name?"
      },
  
      {
        type: "input",
        name: "inId",
        message: "What is the intern's employee ID number?"
      },
  
      {
        type: "input",
        name: "inEmail",
        message: "What is the intern's email address?"
      },
  
      {
        type: "input",
        name: "inSchool",
        message: "What school does the intern attend?"
      }
  
    ]).then(answers => {
      const intern = new Intern(answers.inName, answers.inId, answers.inEmail, answers.inSchool);
      team.interns.push(intern);
      addTeamMember();
    });
  
  }
//   save HTML function if Im done is selected
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error =>
        error ? console.log(error): console.log('Success!'));

}

init();