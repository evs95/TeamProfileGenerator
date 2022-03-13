const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');


var currentRole = 'Manager';
var employeeArray = [];

const getProfileQuestions  = (role) =>{  
  
  let questions = [
    {
      type: 'input',
      name: 'name',
      message: `What is ${role}'s name?`,
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is employee id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is email address?',
    }]

  if(role == 'Manager'){
    questions.push({
      type: 'input',
      name: 'officeNumber',
      message: 'Enter office number:',
    })
  }
  if(role == 'Engineer'){
    questions.push({
      type: 'input',
      name: 'github',
      message: 'Enter your Github User Name',
    })
  }
  if(role == 'Intern'){
    questions.push({
      type: 'input',
      name: 'school',
      message: 'Enter school Name',
    })
  }

  questions.push({
    type: 'list',
    name: 'next',
    message: 'Please select an option to continue',
    choices: ['Add an engineer', 'Add an intern', 'Finished building team']
  })

  return questions;
};

nextProcess = (answers) => {
  processResults(answers);
  if(answers.next == 'Add an engineer'){
    currentRole = 'Engineer';
    askQuestions(currentRole)
  }else if(answers.next == 'Add an intern'){
    currentRole = 'Intern';
    askQuestions(currentRole)
  }else if(answers.next == 'Finished building team'){
    currentRole = 'Manager';
    DisplayResults();
    console.log("Process finished!");
  }else {
    console.log("Invalid choice selected.");
  }
}

askQuestions = (role)=>{
  inquirer
  .prompt(getProfileQuestions(role))
  .then((answers) => {
    nextProcess(answers);
  });
};

processResults = (answers) =>{
  const {name,id,email,officeNumber,github,school} = answers;
  
  if(currentRole == 'Manager'){
    let obj = new Manager(name,id,email,officeNumber)
    employeeArray.push(obj);
  }else if(currentRole == 'Engineer'){
    let obj = new Engineer(name,id,email,github)
    employeeArray.push(obj);
  }else if(currentRole == 'Intern'){
    let obj = new Intern(name,id,email,school)
    employeeArray.push(obj);
  }else {
    console.log("Invalid choice selected.");
  }
}

DisplayResults = ()=>{
  generateHtml(employeeArray);
  console.log('Results displayed!')
};

  // TODO: Create a function to initialize app
function init() {
  askQuestions(currentRole)
}

// Function call to initialize app
init();