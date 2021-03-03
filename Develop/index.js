// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
console.log("hello")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is you project URL?",
    name: "url",
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, "success", (err) => {
    if (err) throw err;
    console.log('yay');
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then(function (response) {
    writeToFile("SUCCESS.md", response)
  });
}

// Function call to initialize app
init();
