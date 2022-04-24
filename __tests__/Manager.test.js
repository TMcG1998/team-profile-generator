const Manager = require('../lib/Manager');

test('Creates a manager object', () => {
    const manager = new Manager('Mark', '4', 'mark4@gmail.com', '4');

    expect(manager.name).toBe('Mark');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('mark4@gmail.com');
    expect(manager.officeNumber).toBe('4');
    expect(manager.getRole()).toBe('Manager');
})

test('uses manager get methods', () => {
    const manager = new Manager('Mark', '4', 'mark4@gmail.com', '4');

    expect(manager.getName()).toBe('Mark');
    expect(manager.getId()).toBe('4');
    expect(manager.getEmail()).toBe('mark4@gmail.com');
})