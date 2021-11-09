const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const internData = "Monash Uni";
  const e = new Intern("tika", 1, "tika@test.com", internData);
  expect(e.school).toBe(internData);
});

test("getRole() should return \"Intern\"", () => {
  const internData = "Intern";
  const e = new Intern("tika", 1, "tika@test.com", "Monash Uni");
  expect(e.getRole()).toBe(internData);
});

test("Can get school via getSchool()", () => {
  const internData = "Monash Uni";
  const e = new Intern("tika", 1, "tika@test.com", internData);
  expect(e.getSchool()).toBe(internData);
});