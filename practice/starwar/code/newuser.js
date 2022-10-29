// - Написати функцію `createNewUser()`, яка буде створювати та повертати об'єкт `newUser`.
// - При виклику функція повинна запитати у імені, що викликає, і прізвище.
// - Використовуючи дані, введені користувачем, створити об'єкт `newUser` з властивостями `firstName` та `lastName`.
// - Додати в об'єкт `newUser` метод `getLogin()`, який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі (наприклад, `Ivan Kravchenko → ikravchenko`).
// - Створити користувача за допомогою функції createNewUser(). Викликати у користувача функцію `getLogin()`. Вивести у консоль результат виконання функції.

function CreateNewUser(firstname, lastname, birthday) {
    this.firstname = firstname
    this.lastname = lastname
    this.birthday = birthday

}

CreateNewUser.prototype.getLogin = function () {
    return this.firstname[0] + this.lastname
}
CreateNewUser.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthday.split('.')[2]
}
CreateNewUser.prototype.getPassword = function () {
    return this.firstname[0].toUpperCase() + this.lastname.toLowerCase() + this.birthday.split('.')[2]
}


var newUser = new CreateNewUser(prompt('Name'), prompt('Lastname'), prompt('Age(dd.mm.Yy'))
console.log(newUser.getLogin())
console.log(newUser.getAge())
console.log(newUser.getPassword())
//
// - Візьміть виконане завдання  (створена вами функція `createNewUser()`) та доповніть її наступним функціоналом:
//    1. При виклику функція повинна запитати в дату народження (текст у форматі `dd.mm.yyyy`) і зберегти її в полі `birthday`.
//    2. Створити метод `getAge()` який повертатиме скільки користувачеві років.
//    3. Створити метод `getPassword()`, який повертатиме першу літеру імені користувача у верхньому регістрі,
//    поєднану з прізвищем (у нижньому регістрі) та роком народження. (Наприклад, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
// - Вивести в консоль результат роботи функції `createNewUser()`, а також функцій `getAge()` та `getPassword()` створеного об'єкта.
