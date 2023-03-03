const {User} = require('./user');

describe('User', () => {
    it('should create a user with correct properties', () => {
        const user = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        expect(user.id).toBe(1);
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('johndoe@example.com');
        expect(user.password).toBe('password');
    });

    it('should get the correct id', () => {
        const user = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        expect(user.getId()).toBe(1);
    });

    it('should get the correct name', () => {
        const user = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        expect(user.getName()).toBe('John Doe');
    });

    it('should get the correct email', () => {
        const user = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        expect(user.getEmail()).toBe('johndoe@example.com');
    });

    it('should set the email correctly', () => {
        const user = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        user.setEmail('johndoe2@example.com');
        expect(user.getEmail()).toBe('johndoe2@example.com');
    });

    it('should set the password correctly', () => {
        const user = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        user.setPassword('newPassword123');
        expect(user.password).toBe('newPassword123');
    });

    it('should set the email correctly', () => {
        const user = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        user.setEmail('newemail@example.com');
        expect(user.getEmail()).toBe('newemail@example.com');
    });

    it('should create unique ids for each user', () => {
        const user1 = new User(1, 'John Doe', 'johndoe@example.com', 'password');
        const user2 = new User(2, 'Jane Doe', 'janedoe@example.com', 'password');
        expect(user1.getId()).not.toBe(user2.getId());
    });
})