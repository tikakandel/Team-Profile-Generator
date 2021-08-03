const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, github) {
        super(employeeName, employeeID, employeeEmail);
        this.github = github;
        super.role = "Engineer";
    }

    getGithub() {
        return this.github;
        
    }
}

module.exports = Engineer;