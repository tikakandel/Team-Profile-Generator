const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Monash Uni";
  const e = new Intern("tika", 1, "tika@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("tika", 1, "tika@test.com", "Monash Uni");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Monash Uni";
  const e = new Intern("tika", 1, "tika@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});