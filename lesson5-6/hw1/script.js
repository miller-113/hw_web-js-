// Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата".
// Створити об'єкт вкладений об'єкт - "Додаток".
// Створити об'єкт "Додаток", вкладені об'єкти, "Заголовок, тіло, футер, дата".
var document_ = {
    dodatok: {
        zagolovok: '',
        telo: '',
        data: '',
        futer: '',
    }
};

function fulfill(object) {
    for (var property in object) {
        if (property === 'zagolovok') {
            object[`${property}`] = '<div class="header"></div>';
        } else if (property === 'telo') {
            object[`${property}`] = '<div class="section"></div>';
        } else if (property === 'data') {
            object[`${property}`] = '<div class="data_field" id="data_f"></div>';
        } else if (property === 'futer') {
            object[`${property}`] = '<div class="footer"></div>';
        }
    }
}

function writer(obj) {
    document.write('<div class="wrapper">')
    for (let property in obj) {
        document.write(obj[`${property}`])
    }
    document.write('</div>')

}

// Створити методи для заповнення та відображення документа.
fulfill(document_.dodatok)
writer(document_.dodatok)
//
// Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.
var arr = [1, 2, 3, 4, 5, 6];
document.write(arr.map((a, index, arr) => {
    document.write([a *= 2, index, arr].join(' | | '), '<br>');
    return `new arr's value=${a}  ||`
}))
//