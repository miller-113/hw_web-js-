window.addEventListener('DOMContentLoaded', function () {
    // First ex
    // Создай класс, который будет создавать пользователей с именем и фамилией.
    // Добавить к классу метод для вывода имени и
    // фамилии
    class Person {
        constructor(name, lastname) {
            this.name = name
            this.lastname = lastname
        }

        getFullName() {
            document.write(this.name, ' ', this.lastname)
        }
    }

    // ____________________________________________________________
    // second ex
    // Создай список состоящий из 4 листов. Используя джс обратись к 2 li и
    // с использованием навигации по DOM дай 1 элементу
    // синий фон, а 3 красный
    let counter = 0;
    const ulChildren = document.querySelector('.ul').children;
    setInterval(function () {
        ulChildren[1].style.color = `hsl(${counter++ % 360}, 100%, 50%)`
        ulChildren[2].style.color = `hsl(${360 - counter}, 100%, 50%)`
    }, 50)
    // ____________________________________________________________
    // third ex
    // Создай див высотой 400 пикселей и добавь на него событие наведения мышки.
    // При наведении мышки выведите текстом
    // координаты, где находится курсор мышки
    let div = document.createElement('div');
    div.style.height = '400px';
    div.style.border = '1px solid black';
    div.onmousemove = mouseMoveEvent.bind(this);
    document.body.append(div);
    div.insertAdjacentHTML('afterend', '<p id="coords"></p>');

    function mouseMoveEvent(e) {
        coords.innerHTML = `X:${e.clientX}  Y:${e.clientY}`;
    }

    // ____________________________________________________________
    // fourth ex
    // Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая
    // кнопка была нажата

    function createButt() {
        res = []
        for (let i = 1; i <= 4; i++) {
            let btn = document.createElement('button');
            btn.value = i;
            btn.append(i);
            btn.onclick = showValue;
            res.push(btn);
        }
        return res
    }

    document.body.append(...createButt());

    function showValue() {
        document.body.append(this.value)
    };
    // ____________________________________________________________
    // fifth ex
    // Создай див и сделай так, чтобы при наведении на див, див изменял свое положение
    // на странице

    function randomNum(from = 0, to = 0) {
        return Math.floor(Math.random() * to)
    }

    let catchDiv = document.createElement('div');
    catchDiv.style.height = '20px';
    catchDiv.style.width = '80px';
    catchDiv.style.background = 'red';
    catchDiv.innerHTML = 'catch me =)';
    document.body.append(catchDiv);

    catchDiv.addEventListener('mouseover', function () {
        this.style.position = 'absolute'
        this.style.top = `${randomNum(0 + this.clientHeight, window.innerHeight) - this.clientHeight}px`
        this.style.right = `${randomNum(0 + this.clientWidth, window.innerWidth) - this.clientWidth}px`
    })

    // ____________________________________________________________
    // sixth ex
    // Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай
    // его фоном body
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault()
        document.body.style.background = this.querySelector('input[type="text"]').value
    })

    // ____________________________________________________________
    // seventh ex
    // Создай инпут для ввода логина, когда пользователь начнет Вводить данные
    // в инпут выводи их в консоль
    //   element.addEventListener('input', function(){
    //        consoloe.log(e.target.value) || this.value при непосредственном вызове из инпута
    //   }


    // ____________________________________________________________
    // eight ex realization
    // Создайте поле для ввода данных поле введения данных выведите текст под полем
    document.body.insertAdjacentHTML('afterend', '<br><input class="input" type="text">')
    document.querySelector('.input').addEventListener('input', function (e) {
        let thatValue = this.value
        this.value = this.value.replace(/[^.]/g, '')
        this.insertAdjacentHTML('afterend', thatValue)
    })
})