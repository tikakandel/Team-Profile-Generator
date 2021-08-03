const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employeeName, employeeID, employeeEmail, school) {
        super(employeeName, employeeID, employeeEmail);
        this.school = school;
        super.role = "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;