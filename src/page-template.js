const Manager = require("../lib/Manager");
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer')

const generateCards = employeeObject => {
    if (employeeObject.confirmAddMember == "Engineer") {
        const {employeeName, employeeId, employeeEmail, github} = employeeObject;
        const engineer = new Engineer(employeeName, employeeId, employeeEmail, github);
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineer.getName()}</h5>
              <h6 class="card-text">${engineer.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${engineer.getId()}</li>
              <li class="list-group-item">${engineer.getEmail()}</li>
              <li class="list-group-item">${engineer.getGithub()}</li>
            </ul>
        </div>
        `;
    } else {
        const {employeeName, employeeId, employeeEmail, school} = employeeObject;
        const intern = new Intern(employeeName, employeeId, employeeEmail, school);
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${intern.getName()}</h5>
              <h6 class="card-text">${intern.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${intern.getId()}</li>
              <li class="list-group-item">${intern.getEmail()}</li>
              <li class="list-group-item">${intern.getSchool()}</li>
            </ul>
        </div>
        `;
    }
        
}

module.exports = templateData => {
    // Store the value of all team members
    const {name, id, email, office, team } = templateData;
    // Remove the last element stored. In all cases, it will be an empty object that
    // will only store the value 'Finish building team'
    team.pop();
    console.log(team);
    const manager = new Manager(name, id, email, office);
    console.log(manager);

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-white text-center bg-danger py-2 px-3">My team</h1>
            </div>
        </header>
    <main class="container my-5">
        ${team.forEach(element => {
            generateCards(element)
        })}
    </main>
  </body>
  </html>
  `;
}