const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const engineerData = "GitHubUser";
  const e = new Engineer("tika", 1, "tika@test.com", engineerData);
  expect(e.github).toBe(engineerData);
});

test("getRole() should return \"Engineer\"", () => {
  const engineerData = "Engineer";
  const e = new Engineer("tika", 1, "tika@test.com", "GitHubUser");
  expect(e.getRole()).toBe(engineerData);
});

test("Can get GitHub username via getGithub()", () => {
  const engineerData = "GitHubUser";
  const e = new Engineer("tika", 1, "tika@test.com", engineerData);
  expect(e.getGithub()).toBe(engineerData);
});