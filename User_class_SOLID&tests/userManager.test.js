const {UserManager} = require("./user");

describe('UserManager', () => {
    let userManager;

    beforeEach(() => {
        userManager = new UserManager();
    });

    it('should add a new user', () => {
        const user = userManager.addUser('John Doe', 'johndoe@example.com', 'password');
        expect(user.getName()).toBe('John Doe');
        expect(user.getEmail()).toBe('johndoe@example.com');
    });

    it('should get a user by id', () => {
        const user1 = userManager.addUser('John Doe', 'johndoe@example.com', 'password');
        const user2 = userManager.addUser('Jane Doe', 'janedoe@example.com', 'password');
        expect(userManager.getUserById(user1.getId())).toBe(user1);
        expect(userManager.getUserById(user2.getId())).toBe(user2);
    });
    // it('should get a user by email', () => {
    //
    // });
})