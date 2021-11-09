const Employee = require('../lib/Employee');

describe("Employee", () => {

    describe("Initialization", () => {

        it(`It should create an object with values of 'employeeName', 'employeeID', 'employeeEmail' & 'role'`, () => {
            const employeeData = new Employee('tika', 1, 'tika@my.com');
            
            expect(employeeData.employeeName).toEqual("tika");
            expect(employeeData.employeeID).toBe(1);
            expect(employeeData.employeeEmail).toEqual('tika@my.com');
            expect(employeeData.role).toEqual('Employee');
        });
  
        it("It should create a method of getName", () => {
            const employeeNameData = new Employee('tika', '1', 'tika@my.com');
    
            expect(employeeNameData.getName()).toEqual('tika');
        });

        it("It should create a method of getEmail", () => {
            const employeeEmailData = new Employee('tika', '1', 'tika@my.com');
    
            expect(employeeEmailData.getEmail()).toEqual('tika@my.com');
        });

        it("It should create a method of getId", () => {
            const employeeIdData = new Employee('tika', '1', 'tika@my.com');
    
            expect(employeeIdData.getId()).toEqual('1');
        });

        it("It should create a method of getRole", () => {
            const newName = new Employee('tika', '1', 'tika@my.com');
    
            expect(newName.getRole()).toEqual('Employee');
        });
  
    });
    
  });