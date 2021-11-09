const Manager = require("../lib/Manager");


test("Can set office number via constructor argument", () => {
  const managerData = 100;
  const e = new Manager("Foo", 1, "test@test.com", managerData);
  expect(e.officeNumber).toBe(managerData);
});

test("getRole() should return \"Manager\"", () => {
  const managerData = "Manager";
  const e = new Manager("tika", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(managerData);
});

test("Can get office number via getOffice()", () => {
  const managerData = 100;
  const e = new Manager("Foo", 1, "test@test.com", managerData);
  expect(e.getOfficeNumber()).toBe(managerData);
});