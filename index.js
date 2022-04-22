// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

// Array of questions for user input
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

const employeeQuestions = [
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
        }
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
        }
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
        }
    },
    {
        type: 'list',
        name: 'confirmAddMember',
        message: 'Would you like to enter another team member?',
        choices: ['Engineer', 'Intern', 'Finish building team']
    },
];

const promptManager = () => {
    return inquirer.prompt(managerQuestions);
}

const promptMember = (memberData) => {
    if (memberData.confirmAddMember == 'Finish building team') {
        // console.log(memberData);
        return memberData;
    }

    if(!memberData.team) {
        memberData.team = [];
        console.log('creating array');
    }

    console.log(`
    ====================
    Adding a New ${memberData.confirmAddMember}
    ====================
    `);

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
        console.log(memberData);
    })