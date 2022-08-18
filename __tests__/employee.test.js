const Employee = require("../lib/employee");

describe('creates a Employee object', () => {
  const employee = new Employee('Rachel', 1, 'rachel@gmail.com');

  expect(employee.name).toBe('Rachel');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('rachel@gmail.com');
})

test("Test name", () => {
    const employee = new Employee('Rachel', 1, 'rachel@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));

});

test("Test role", () => {
    const employee = new Employee('Rachel', 1, 'rachel@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
  
});

test("Test school", () => {
    const employee = new Employee('Rachel', 1, 'rachel@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
  
});

test("Test role", () => {
    const employee = new Employee('Rachel', 1, 'rachel@gmail.com');
    expect(employee.getRole()).toBe('Employee');
  }); 