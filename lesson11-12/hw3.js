
// Реалізуйте програму перевірки телефону
// * Використовуючи JS Створіть поле для введення телефону та кнопку збереження
// * Користувач повинен ввести номер телефону у форматі 000-000-00-00
// * Після того як користувач натискає кнопку зберегти перевірте правильність
// введення номера, якщо номер правильний зробіть зелене тло і використовуючи
// document.location переведіть користувача на сторінку
// https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg якщо буде помилка, відобразіть її в діві до input.
window.addEventListener('load', function () {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let btn = document.createElement('button');
    form.style.width = '178px';
    form.style.padding = '0 5px';
    form.style.border = '1px solid black';
    btn.value = 'check';
    btn.type = 'button';
    btn.textContent = 'Save';
    // label.for = 'phone'
    input.type = 'text';
    input.id = 'phone';
    input.name = 'phone';
    document.body.append(form);
    form.append(input, btn);
    form.insertAdjacentHTML('afterbegin',
        '<label for="phone">Your phone:</label><br> ');
    btn.addEventListener('click', function () {
        let regTest = input.value.match(/^\+?\d{3}-?\d{3}-?\d{2}-?\d{2}$/);
        if (regTest) {
            let colors = ['green', 'white']
            let i = 2
            let interval = setInterval(function () {
                form.style.background = colors[i++ % 2]
            }, 200)
            setTimeout(function () {
                clearInterval(interval)
                form.style.background = ''
                // document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg'

            }, 1400)
        } else {
            (!document.querySelector('#err')) ?
                this.parentElement.insertAdjacentHTML('afterbegin',
                    '<div id="err" style="color: red">Number format incorrect</div>') : ''
        }
    })

    input.addEventListener('focusin', function () {
        let removeErr = document.querySelector('#err')
        if (removeErr) {
            removeErr.remove()
        }
    })
})