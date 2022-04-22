const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mark', '4', 'mark4@gmail.com');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe('4');
    expect(employee.email).toBe('mark4@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})