
const Intern = require("../lib/intern");

test('creates an Inter object', () => {
    const intern = new Intern('Ross', 3, 'ross@gmail.com', 'Central Cafe');
  
    expect(intern.name).toBe('Ross');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('ross@gmail.com');
    expect(intern.school).toBe('Central Cafe');
  
});

test("Test school", () => {
    const intern = new Intern('Ross', 3, 'ross@gmail.com', 'Central Cafe');
    expect(intern.getSchool()).toEqual(expect.any(String));
  
});

test("Test role", () => {
    const intern = new Intern('Ross', 3, 'ross@gmail.com', 'Central Cafe');
    expect(intern.getRole()).toBe('Intern');
  
});