const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({projectTitle, projectDesc, installation, usage, contribution, testInstr, license, github, email}) =>
  `# ${projectTitle}

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
  This applicattion is covered under ${license}

  ## Contributing
  ${contribution}

  ## Tests
  ${testInstr}

  ## Questions
  Github: https://github.com/${github}  
  Email: ${email}
  `;

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
      message: 'Briefly describe your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation requirements?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
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
      choices: ['license1', 'license2', 'license3', 'license4']
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
    console.log(answers);
    fs.writeFile('./output/README.md', generateREADME(answers), (err) =>
      err ? console.log(err) : console.log('Created README.md')
    );
  });