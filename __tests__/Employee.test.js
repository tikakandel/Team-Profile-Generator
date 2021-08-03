const Employee = require('../lib/Employee');

describe("Employee", () => {

    describe("Initialization", () => {

        it(`It should create an object with key values of 'employeeName', 'employeeID', 'employeeEmail' & 'role'`, () => {
            const employeeData = new Employee('tika', 1, 'tika@my.com');
            
            expect(employeeData.employeeName).toEqual("tika");
            expect(employeeData.employeeID).toBe(1);
            expect(employeeData.employeeEmail).toEqual('tika@my.com');
            expect(employeeData.role).toEqual('Employee');
        });
  
        it("It should create a method of getName", () => {
            const employeeData = new Employee('tika', '1', 'tika@my.com');
    
            expect(employeeData.getName()).toEqual('tika');
        });

        it("It should create a method of getEmail", () => {
            const employeeData = new Employee('tika', '1', 'tika@my.com');
    
            expect(employeeData.getEmail()).toEqual('tika@my.com');
        });

        it("It should create a method of getId", () => {
            const employeeData = new Employee('tika', '1', 'tika@my.com');
    
            expect(employeeData.getId()).toEqual('1');
        });

        it("It should create a method of getRole", () => {
            const newName = new Employee('tika', '1', 'tika@my.com');
    
            expect(newName.getRole()).toEqual('Employee');
        });
  
    });
    
  });