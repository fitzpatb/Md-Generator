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
  },
  {
    type: "input",
    message: "Type npm i to install the dependencies",
    name: "install",
    default: "npm i",
  },
  {
    type: "input",
    message: "How does a user use your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "How does someone contribute to the project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Type npm test to test the repository",
    name: "test",
    default: "npm test",
  },
  {
    type: "list",
    message: "Choose the license used",
    name: "license",
    choices: [
      'MIT',
      'Unlicense',
      'GPL-v3',
      'AGPL-v3',
      'LGPL-v3',
      'MPl-2.0',
      'Apache-2.0',
      'EPL-1.0',
      'BSD-3-Clause',
      'BSD-2-Clause',
      'Boost-1.0'
    ]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let color = '';
  let link = '';
  if (data.license === 'MIT') {
    color = 'yellow';
    link = 'https://opensource.org/licenses/MIT';
  } else if (data.license === 'Unlicense') {
    color = 'blue';
    link = 'http://unlicense.org/';
  } else if (data.license === 'GPL-v3') {
    color = 'blue';
    link = 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (data.license === 'AGPL-v3') {
    color = 'blue';
    link = 'https://www.gnu.org/licenses/agpl-3.0';
  } else if (data.license === 'LGPL-v3') {
    color = 'blue';
    link = 'https://www.gnu.org/licenses/lgpl-3.0';
  } else if (data.license === 'MPl-2.0') {
    color = 'brightgreen';
    link = 'https://opensource.org/licenses/MPL-2.0';
  } else if (data.license === 'Apache-2.0') {
    color = 'yellowgreen';
    link = 'https://opensource.org/licenses/Apache-2.0';
  } else if (data.license === 'EPL-1.0') {
    color = 'red';
    link = 'https://opensource.org/licenses/EPL-1.0';
  } else if (data.license === 'BSD-3-Clause') {
    color = 'orange';
    link = 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (data.license === 'BSD-2-Clause') {
    color = 'orange';
    link = 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (data.license === 'Boost-1.0') {
    color = ' lightblue';
    link = 'https://www.boost.org/LICENSE_1_0.txt';
  }

  const information = `# ${data.title}\n`+
  `[![GitHub License](https://img.shields.io/badge/License-${data.license}-${color}.svg)](${link})\n\n`+
  `## Description\n`+
  `${data.description}\n`+
  `## Table of Contents\n`+
  `* [Installation](#installation)\n`+
  `* [Usage](#usage)\n`+
  `* [Contribute](#contribute)\n`+
  `* [Tests](#tests)\n`+
  `* [Questions](#questions)\n`+
  `## Installion\n`+
  `For this project be sure to run the following command in your terminal to install the necessary dependencies.\n`+
  "```\n" + data.install + "\n```\n\n" +
  `## Usage\n`+
  `${data.usage}\n`+
  `## License\n`+
  `${data.license}`+
  `## Contribute\n`+
  `${data.contribute}\n`+
  `## Tests\n`+
  "```\n" + data.test + "\n```\n\n"+
  `## Questions\n`+
  `If you have any questions at all please reach out to [${data.username}](${data.url}) or email directly at ${data.email}`;

  fs.writeFile(fileName, information, (err) => {
    if (err) throw err;
    console.log('yay');
  });
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
