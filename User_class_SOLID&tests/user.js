class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
            throw "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
        }
        this.password = password;
    }
}


class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(name, email, password) {
        const id = this.users.length + 1;
        const user = new User(id, name, email, password);
        this.users.push(user);
        return user;
    }

    getUserById(id) {
        return this.users.find(user => user.getId() === id);
    }

    getUserByEmail(email) {
        return this.users.find(user => user.getEmail() === email);
    }

    deleteUser(id) {
        this.users = this.users.filter(user => user.getId() !== id);
    }
}


module.exports = {User, UserManager};
