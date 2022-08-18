const Engineer = require("../lib/engineer");

describe('creates an Engineer object', () => {
    const engineer = new Engineer('Chandler', 2, 'chandler@gmail.com', 'https://github.com/JelenaTomic');
    expect(engineer.name).toBe('Chandler');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('chandler@gmail.com');
    expect(engineer.GitHub).toBe('https://github.com/JelenaTomic');
 
})
  
test("Test school", () => {
    const engineer = new Engineer('Chandler', 2, 'chandler@gmail.com', 'https://github.com/JelenaTomic');
    expect(engineer.getGitHub()).toEqual(expect.any(String));
  
});

test("Test role", () => {
    const engineer = new Engineer('Chandler', 2, 'chandler@gmail.com', 'https://github.com/JelenaTomic');
    expect(engineer.getRole()).toBe('Engineer');
  }); 