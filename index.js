// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

// Array of questions for manager input
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID? (Required)',
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: (Required)',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter your office number: (Required)',
        validate: officeInput => {
            if(officeInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    }
];


// Array of questions for employee input
const employeeQuestions = [
    {
        type: 'list',
        name: 'confirmAddMember',
        message: 'Would you like to enter another team member?',
        choices: ['Engineer', 'Intern', 'Finish building team'],
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'Enter employee name (Required)',
        validate: employeeNameInput => {
            if(employeeNameInput) {
                return true;
            } else {
                console.log('Please enter employee name!');
                return false;
            }
        },
        when: (answers) => answers.confirmAddMember != 'Finish building team'
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter employee ID (Required)',
        validate: employeeIdInput => {
            if(employeeIdInput) {
                return true;
            } else {
                console.log('Please enter employee ID!');
                return false;
            }
        },
        when: (answers) => answers.confirmAddMember != 'Finish building team'
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter employee email (Required)',
        validate: employeeEmailInput => {
            if(employeeEmailInput) {
                return true;
            } else {
                console.log('Please enter employee email!');
                return false;
            }
        },
        when: (answers) => answers.confirmAddMember != 'Finish building team'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub?',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please enter employee name!');
                return false;
            }
        },
        when: (answers) => answers.confirmAddMember == 'Engineer'
        
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does this employee attend?',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please enter employee name!');
                return false;
            }
        },
        when: answers => answers.confirmAddMember == 'Intern'
    }
];

// Use the manager prompts to return the answers to the manager questions
const promptManager = () => {
    return inquirer.prompt(managerQuestions);
}

// If they chose to finish, return immediately, otherwise run through the questions
const promptMember = (memberData) => {
    // console.log(memberData);

    if(!memberData.team) {
        memberData.team = [];
        // console.log('creating array');
    }

    return inquirer.prompt(employeeQuestions)
    .then(newMemberData => {
        memberData.team.push(newMemberData);
        if(newMemberData.confirmAddMember == 'Finish building team') {
            return memberData;
        } else {
            return promptMember(memberData);
        }
    })
}

promptManager()
    .then(promptMember)
    .then(memberData => {
        return generatePage(memberData);
    })
    .then(pageHTML => {
        return fs.writeFile('./dist/index.html', pageHTML, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("File written successfully\n");
                console.log("File location: ./dist/index.html");
            }
        });
    })