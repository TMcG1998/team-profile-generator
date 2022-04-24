module.exports = templateData => {
    console.log(templateData);
    // Store the value of all team members
    const { team } = templateData;
    // Remove the last element stored. In all cases, it will be an empty object that
    // will only store the value 'Finish building team'
    team.pop();
    
}