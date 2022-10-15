// Створіть клас Phone, який містить змінні number, model і weight.
// Створіть три екземпляри цього класу.
// Виведіть на консоль значення їх змінних.
// Додати в клас Phone методи: receiveCall, має один параметр - ім'я. ' +
// 'Виводить на консоль повідомлення "Телефонує {name}". Метод getNumber повертає номер телефону.' +
// ' Викликати ці методи кожного з об'єктів.
class Phone {
    constructor(number, model, weight) {
        this.number = number
        this.model = model
        this.weight = weight
    }

    reciveCall(name) {
        return `Телефонує ${name}`
    }

    getNumber() {
        return `Телефонує ${this.number}`
    }
}

instance1 = new Phone('+483254363', 'Iphone', '150g')
instance2 = new Phone('+481234556', 'Iphone', '150g')
instance3 = new Phone('+3803254363', 'Samsung', '170g')
data = [instance1, instance2, instance3].map(e => {
    return [e.model, e.number, e.weight]
})
// console.log(data.map(e => {
//     return `${e}`
// }))
data.forEach(e => {
    console.log(...e)
})
console.log(instance1.reciveCall('Nick'))
console.log(instance1.getNumber())
console.log(instance1.reciveCall('Amanda'))
console.log(instance2.getNumber())
console.log(instance1.reciveCall('Alex'))
console.log(instance3.getNumber())


// - Написати функцію filterBy(), яка прийматиме 2 аргументи.
// Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.

// - Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент,
// за винятком тих, тип яких був переданий другим аргументом.
// Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string',
// то функція поверне масив [23, null].
test_arr = ['hello', 'world', 23, '23', null]
type_ = 'string'

function filterBy(arr, type) {
    temp_arr = []
    arr.forEach(e => {
        if (typeof (e) !== type) {
            temp_arr.push(e)
        }
    })
    return temp_arr
}

console.log(filterBy(test_arr, type_))