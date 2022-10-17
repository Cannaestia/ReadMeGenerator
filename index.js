// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
  inquirer
    .prompt ([
      {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions on how to install programs for your project',
      },
      {
        type: 'input',
        name: 'useage',
        message: 'What is the use of your project?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter name of those who have contributed to the project',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter testing done on the project',
      },
      {
        type: 'input',
        name: 'github',
        message: 'enter github link associated with the project',
      },
      {
        type: 'input',
        name: 'email',
        message: 'enter an email for users to reach out to with questions',
      },
      {
        type: 'list',
        name: 'license',
        message: 'pick your license',
        choices: ['[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
                  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                  '[[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],
      },
    ]).then((answers) => {
      console.log(answers);
      const template = 
`# ${answers.title} ${answers.license}
      
## Table of Contents
* [Description](#description)
* [Visuals](#visuals)
* [Installation](#installation)
* [Useage](#useage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)
  
## Description
${answers.description}

## Visuals
      
## Installation
${answers.installation}
      
## Useage
${answers.useage}
      
## License
      
## Contribution
${answers.contribution}
      
## Test
${answers.test}
      
## Questions
For any questions please reach out to the following links:

https://github.com/${answers.github}
${answers.email}`;
      if (fs.existsSync('output')){
        fs.writeFileSync('output/README.md', template);
      }
      else{
          fs.mkdirSync('output');
          fs.writeFileSync('output/README.md', template);
      }
    })
}
 questions();
// License links found at https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba










// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
