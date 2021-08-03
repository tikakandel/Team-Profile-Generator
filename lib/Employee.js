class Employee {
    constructor(employeeName, employeeID, employeeEmail) {
        this.employeeEmail = employeeEmail;
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.role = "Employee";
    }

    getName() {
        return this.employeeName;
    }

    getId() {
        return this.employeeID;
    }

    getEmail() {
        return this.employeeEmail;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;