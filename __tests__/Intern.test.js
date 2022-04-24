const Intern = require('../lib/Intern');

test('Creates an Intern object', () => {
    const intern = new Intern('Mark', '4', 'mark4@gmail.com', 'UB');

    expect(intern.name).toBe('Mark');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('mark4@gmail.com');
    expect(intern.school).toBe('UB');
    expect(intern.getRole()).toBe('Intern');
})

test('uses Intern get methods', () => {
    const intern = new Intern('Mark', '4', 'mark4@gmail.com', 'UB');

    expect(intern.getName()).toBe('Mark');
    expect(intern.getId()).toBe('4');
    expect(intern.getEmail()).toBe('mark4@gmail.com');
    expect(intern.getSchool()).toBe('UB');
})