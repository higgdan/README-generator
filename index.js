// define required packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// on application load, prompt the user fill out each section of the README in turn
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'projectDesc',
      message: 'Briefly describe your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation requirements?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe how to use the application',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'testInstr',
      message: 'What are the test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license covers this application?',
      choices: ['MIT License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    // uses a regex to convert spaces to underscores for insertion into badge-making URL
    let insUnderscore = answers.license.replace(/ /g,"_");
    // creates a README file, passes in answers to prompts and altered liscence 
    fs.writeFile('./output/README.md', generateREADME(answers, insUnderscore), (err) =>
      err ? console.log(err) : console.log('Created README.md')
    );
  });

// defines the layout of README and position of the passed in parameters
const generateREADME = ({projectTitle, projectDesc, installation, usage, contribution, testInstr, license, github, email}, licenseUnd) =>
`# ${projectTitle}

![License: ${license}](https://img.shields.io/badge/License-${licenseUnd}-brightgreen.svg)

## Description
${projectDesc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
${contribution}

## Tests
${testInstr}

## Questions
If you have further questions about this project you can reach me at ${email}  

You gan find more of my examples of my work at my Github: https://github.com/${github}`;