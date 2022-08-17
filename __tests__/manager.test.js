const Manager = require('../lib/manager');

test('creates a Manager object', () => {
    const manager = new Manager('Monica', 4, 'monica@gmail.com', 9);

    expect(manager.name).toBe('Monica');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('monica@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test("Test officeNumber", () => {
    const manager = new Manager('Monica', 4, 'monica@gmail.com', 9);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("Test role", () => {
    const manager = new Manager('Monica', 4, 'monica@gmail.com', 9);
    expect(manager.getRole()).toBe('Manager');
});