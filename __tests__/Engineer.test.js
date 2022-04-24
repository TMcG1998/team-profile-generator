const Engineer = require('../lib/Engineer');

test('Creates an engineer object', () => {
    const engineer = new Engineer('Mark', '4', 'mark4@gmail.com', 'tmcg1998');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('mark4@gmail.com');
    expect(engineer.github).toBe('tmcg1998');
    expect(engineer.getRole()).toBe('Engineer');
})

test('uses engineer get methods', () => {
    const engineer = new Engineer('Mark', '4', 'mark4@gmail.com', 'tmcg1998');

    expect(engineer.getName()).toBe('Mark');
    expect(engineer.getId()).toBe('4');
    expect(engineer.getEmail()).toBe('mark4@gmail.com');
    expect(engineer.getGithub()).toBe('tmcg1998');
})